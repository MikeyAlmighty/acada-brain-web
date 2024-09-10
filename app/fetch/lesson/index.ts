import { fetchData } from "@/app/lib/fetch-service";
import { LessonFormValues } from "@/app/types/lesson";
import { BACKEND_URL } from "@/constants";

const createLessonFetch = async (data: LessonFormValues) => {
  await fetchData(BACKEND_URL + `/lessons/`, {
    method: "POST",
    body: JSON.stringify({ ...data }),
  });
};

export { createLessonFetch };
