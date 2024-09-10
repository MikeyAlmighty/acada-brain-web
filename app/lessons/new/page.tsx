"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import Heading from "@/app/components/heading";
import Question from "@/app/components/question";
import ImageUpload from "@/app/components/image-upload";
import { videoUploadFetch } from "@/app/fetch/content";
import { LessonFormValues } from "@/app/types/lesson";
import { createLessonFetch } from "@/app/fetch/lesson";

const NewLessonPage = () => {
  const [fields, setFields] = useState([{ name: "" }]);
  const [questionCount, setQuestionCount] = useState<number>(1);
  const [file, setFile] = useState<File | null | undefined>();

  const { handleSubmit, register, unregister } = useForm<LessonFormValues>();

  const addField = () => {
    setFields([...fields, { name: "" }]);
  };

  const removeField = (index: number) => {
    setQuestionCount((prev) => prev - 1);
    setFields(fields.filter((_, i) => i !== index));
    unregister(`questions.${index}`);
  };

  const onSubmit = async (data: LessonFormValues) => {
    const id = uuidv4();
    console.log("Form submission:", data);
    await Promise.all([
      createLessonFetch({ ...data, id }),
      videoUploadFetch(id, file),
    ]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <form
        className="flex items-center flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading text="Add Lesson" />
        <div className="flex flex-col items-center bg-neutral">
          <label className="input input-bordered m-12 w-[15vw] flex items-center gap-2">
            Name
            <input
              type="text"
              required
              {...register("title")}
              placeholder={"title"}
            />
          </label>
          <label className="w-[15vw] flex flex-col items-center gap-2">
            Description
            <textarea
              {...register("description")}
              placeholder="Description"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
          </label>

          <div className="flex flex-col items-center">
            <h1 className="m-2 w-[15vw] text-center items-center gap-2"></h1>
            <label className="flex flex-col items-center">
              <p className="pb-2">Thumbnail</p>
              <ImageUpload
                imageHeight={250}
                imageWidth={100}
                handleUpload={(file) => {
                  setFile(file);
                }}
              />
            </label>
          </div>

          <div className="flex flex-col max-h-[50vh] rounded overflow-y-auto w-[45vw] items-center justify-around">
            {Array.from({ length: questionCount }).map((_, index) => (
              <Question
                handleQuestionRemove={removeField}
                register={register}
                key={index}
                questionIndex={index}
              />
            ))}
          </div>
          <button
            onClick={() => {
              setQuestionCount(questionCount + 1);
              addField();
            }}
            className="btn btn-secondary my-6 w-25"
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
