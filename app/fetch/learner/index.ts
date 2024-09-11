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
  image: string | Blob,
  data: SignUpFormValues,
  lecturerId: string,
  accessToken: string,
) => {
  if (accessToken) {
    const id = uuidv4();
    const formData = new FormData();

    formData.append("id", id);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("isLecturer", false);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("username", data.username);
    formData.append("phoneNumber", data.phoneNumber);
    image && formData.append("image", image);

    await fetch(`${BACKEND_URL}/learners/${lecturerId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });
  }
};

export { getLearnerFetch, assignLearnerFetch };
