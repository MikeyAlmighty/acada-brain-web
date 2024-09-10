import { fetchData } from "@/app/lib/fetch-service";
import { EditFormValues, SignUpFormValues } from "@/app/types/user";
import { BACKEND_URL } from "@/constants";

const signUpFetch = async (data: SignUpFormValues) => {
  await fetchData(
    BACKEND_URL + `/auth/signup/${data.isLecturer ? "lecturer" : "learner"}`,
    {
      method: "POST",
      body: JSON.stringify({ ...data }),
    },
  );
};

const editUserFetch = async (
  userId: string,
  data: EditFormValues,
  accessToken: string | undefined,
  role: "lecturer" | "learner",
) => {
  const { firstName, lastName, phoneNumber } = data;
  return await fetchData(
    BACKEND_URL +
      `/${role === "lecturer" ? "lecturers" : "learners"}/${userId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
      }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    false,
  );
};

export { signUpFetch, editUserFetch };
