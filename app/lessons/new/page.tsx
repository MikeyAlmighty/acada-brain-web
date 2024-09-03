"use client";

import { useState } from "react";

import Heading from "@/app/components/heading";
import Question from "@/app/components/question";

const NewLessonPage = () => {
  const [questionCount, setQuestionCount] = useState<number>(1);
  const [questions, setQuestions] = useState();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Add Lesson" />
      <div className="flex flex-col items-center bg-neutral">
        <div className="flex flex-col max-h-[50vh] pt-12 rounded overflow-y-auto w-[45vw] items-center justify-around">
          {Array.from({ length: questionCount }).map((_, index) => (
            <Question key={index} questionIndex={index} />
          ))}
        </div>
        <button
          onClick={() => setQuestionCount(questionCount + 1)}
          className="btn btn-secondary my-12 w-25"
        >
          Add Question
        </button>
      </div>
      <button className="btn btn-primary w-72 mt-12">Add Lesson</button>
    </main>
  );
};

export default NewLessonPage;
