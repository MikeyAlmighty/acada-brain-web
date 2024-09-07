"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Heading from "@/app/components/heading";
import Question from "@/app/components/question";
import ImageUpload from "@/app/components/image-upload";

const NewLessonPage = () => {
  const [fields, setFields] = useState([{ name: "" }]);
  const [questionCount, setQuestionCount] = useState<number>(1);

  const { handleSubmit, register } = useForm();

  const addField = () => {
    setFields([...fields, { name: "" }]);
  };

  // const removeField = (index: number) => {
  //   setFields(fields.filter((_, i) => i !== index));
  // }

  const onSubmit = (data) => {
    console.log("Form submission:", data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading text="Add Lesson" />
        <div className="flex flex-col items-center bg-neutral">
          <label className="input input-bordered m-12 w-[15vw] flex items-center gap-2">
            <input
              type="text"
              required
              {...register("name")}
              placeholder={"Name"}
            />
          </label>

          <div className="flex flex-col items-center">
            <h1 className="m-12 w-[15vw] text-center items-center gap-2"></h1>
            <ImageUpload
              location={`content/46.png`}
              uploadTitle="Upload Lesson Thumbnail"
            />
          </div>

          <div className="flex flex-col max-h-[50vh] rounded overflow-y-auto w-[45vw] items-center justify-around">
            {Array.from({ length: questionCount }).map((_, index) => (
              <Question register={register} key={index} questionIndex={index} />
            ))}
          </div>
          <button
            onClick={() => {
              setQuestionCount(questionCount + 1);
              addField();
            }}
            className="btn btn-secondary my-12 w-25"
          >
            Add Question
          </button>
        </div>
        <button
          /* onClick={() => console.log(questions)} */
          type="submit"
          className="btn btn-primary w-72 mt-12"
        >
          Save
        </button>
      </form>
    </main>
  );
};

export default NewLessonPage;
