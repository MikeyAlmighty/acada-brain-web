export type LessonFormValues = {
  title: string;
  description: string;
  question: {
    text: string;
    answers: {
      option: string;
      isCorrect: boolean;
    }[];
  };
};
