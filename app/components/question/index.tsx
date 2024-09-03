"use client";

import { useState } from "react";
import AnswerSelector from "../answer-selector";

type QuestionProps = {
  questionIndex: number;
};

const Question = ({ questionIndex }: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-around mt-[2em] px-48 w-full">
        <label className="input input-bordered p-[2em] mx-2 w-full flex items-center gap-2">
          {questionIndex + 1}
          <input type="text" className="grow" placeholder="Question" />
        </label>
        <button className="btn btn-circle btn-neutral">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <AnswerSelector
            index={index}
            handleAnswerSelect={(answer) => setSelectedAnswer(answer)}
            selectedAnswer={selectedAnswer}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
