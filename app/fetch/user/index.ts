import { fetchData } from "@/app/lib/fetch-service";
import { EditFormValues, SignUpFormValues } from "@/app/types/user";
import { BACKEND_URL } from "@/constants";

const signUpFetch = async (
  data: SignUpFormValues & { image: string | Blob },
) => {
  console.log("posting: ", data);
  const formData = new FormData();

  formData.append("id", data.id);
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("isLecturer", data.isLecturer);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("username", data.username);
  formData.append("phoneNumber", data.phoneNumber);
  data?.image && formData.append("image", data.image);

  await fetch(
    BACKEND_URL + `/auth/signup/${data.isLecturer ? "lecturer" : "learner"}`,
    {
      method: "POST",
      body: formData,
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
