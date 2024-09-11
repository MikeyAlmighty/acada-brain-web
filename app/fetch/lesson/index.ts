import { fetchData } from "@/app/lib/fetch-service";
import { LessonFormValues } from "@/app/types/lesson";
import { BACKEND_URL } from "@/constants";

const createLessonFetch = async (
  accessToken: string,
  data: LessonFormValues & { video: File | null | undefined },
) => {
  const formData = new FormData();

  formData.append("id", data.id);
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("questions", JSON.stringify(data.questions));
  data.video && formData.append("video", data.video);

  await fetch(BACKEND_URL + `/lessons/`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const getLessonsFetch = async (accessToken: string) => {
  return await fetchData(BACKEND_URL + `/lessons/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export { createLessonFetch, getLessonsFetch };
