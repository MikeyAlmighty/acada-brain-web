export type QuestionState = {
  question: {
    index: number;
    text: string;
  };
  answers: {
    option: string;
    index: number;
    isCorrectAnswer: boolean;
  };
};
