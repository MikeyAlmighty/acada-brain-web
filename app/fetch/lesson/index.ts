import { fetchData } from "@/app/lib/fetch-service";
import { Learner } from "@/app/types/learner";
import { LessonFormValues } from "@/app/types/lesson";
import { BACKEND_URL } from "@/constants";

const createLessonFetch = async (
  accessToken: string,
  data: LessonFormValues & {
    video: File | null | undefined;
    learnerIds: string[];
    lecturerId: string;
  },
) => {
  const formData = new FormData();

  formData.append("id", data.id);
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("questions", JSON.stringify(data.questions));
  formData.append("learnerIds", JSON.stringify(data.learnerIds));
  data.video && formData.append("video", data.video);

  await fetch(BACKEND_URL + `/lessons/${data.lecturerId}`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const getLessonsByLecturerFetch = async (
  accessToken: string,
  lecturerId: string,
) => {
  try {
    return await fetchData(BACKEND_URL + `/lessons/lecturer/${lecturerId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const getLessonsByLearnerFetch = async (
  accessToken: string,
  learnerId: string,
) => {
  try {
    return await fetchData(BACKEND_URL + `/lessons/learner/${learnerId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const getLessonFetch = async (accessToken: string, lessonId: string) => {
  return await fetchData(BACKEND_URL + `/lessons/${lessonId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export {
  createLessonFetch,
  getLessonsByLecturerFetch,
  getLessonsByLearnerFetch,
  getLessonFetch,
};
