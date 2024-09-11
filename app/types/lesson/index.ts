export type LessonFormValues = {
  id: string;
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