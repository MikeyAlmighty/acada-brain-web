import { fetchData } from "@/app/lib/fetch-service";
import { SignUpFormValues } from "@/app/types/user";
import { BACKEND_URL } from "@/constants";
import { v4 as uuidv4 } from "uuid";

const getLearnerFetch = async (
  userId: string,
  accessToken: string | null | undefined,
) => {
  if (accessToken) {
    return await fetchData(`${BACKEND_URL}/learners/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};

const assignLearnerFetch = async (
  data: SignUpFormValues,
  lecturerId: string,
  accessToken: string,
) => {
  if (accessToken) {
    const id = uuidv4();
    return await fetchData(`${BACKEND_URL}/learners/${lecturerId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ ...data, id }),
    });
  }
};

export { getLearnerFetch, assignLearnerFetch };
