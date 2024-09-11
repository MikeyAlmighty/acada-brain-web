import { fetchData } from "@/app/lib/fetch-service";
import { LessonFormValues } from "@/app/types/lesson";
import { BACKEND_URL } from "@/constants";

const createLessonFetch = async (
  accessToken: string,
  data: LessonFormValues,
) => {
  await fetchData(BACKEND_URL + `/lessons/`, {
    method: "POST",
    body: JSON.stringify({ ...data }),
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
