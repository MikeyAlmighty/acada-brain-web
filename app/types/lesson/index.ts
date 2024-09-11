export type LessonFormValues = {
  id: string;
  title: string;
  description: string;
  questions: {
    text: string;
    answers: {
      option: string;
      isCorrect: boolean;
    }[];
  };
};
