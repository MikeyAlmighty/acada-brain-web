"use client";

type AnswerSelectorProps = {
  selectedAnswer: number;
  index: number;
  handleAnswerSelect: (answer: number) => void;
};

const labelMatch = (index: number) => {
  switch (index) {
    case 1: {
      return {
        label: "A",
        toggleColor: "primary",
      };
    }
    case 2: {
      return {
        label: "B",
        toggleColor: "success",
      };
    }
    case 3: {
      return {
        label: "C",
        toggleColor: "warning",
      };
    }
    case 4: {
      return {
        label: "D",
        toggleColor: "info",
      };
    }
    default:
      return {
        label: "A",
        toggleColor: "primary",
      };
  }
};

const AnswerSelector = ({
  selectedAnswer,
  handleAnswerSelect,
  index,
}: AnswerSelectorProps) => {
  const { label, toggleColor } = labelMatch(index + 1);
  return (
    <div className="flex items-center mt-12">
      {label}
      <input
        type="checkbox"
        checked={selectedAnswer === index}
        onClick={() => handleAnswerSelect(index)}
        className={`toggle toggle-${toggleColor} mx-2`}
      />
      <label className="input input-bordered w-36 mx-2 flex items-center gap-2">
        <input type="text" className="grow" />
      </label>
    </div>
  );
};

export default AnswerSelector;
