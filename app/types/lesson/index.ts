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

export type LessonResponse = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  questions: {
    text: string;
    answers: {
      option: string;
      isCorrect: boolean;
    }[];
  };
};
