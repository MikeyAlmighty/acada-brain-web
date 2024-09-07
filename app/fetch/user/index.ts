import { fetchData } from "@/app/lib/fetch-service";
import {
  EditFormValues,
  SignUpFormValues,
  SignUpResponse,
} from "@/app/types/user";
import { BACKEND_URL } from "@/constants";

const signUpFetch = async (data: SignUpFormValues): Promise<SignUpResponse> => {
  return await fetchData(BACKEND_URL + "/users/signup", {
    method: "POST",
    body: JSON.stringify({ ...data }),
  });
};

const profilePictureUploadFetch = async (
  userId: string,
  file: File | null | undefined,
) => {
  if (!file) return;

  const renamedFile = new File([file], `profile-pictures/${userId}.png`, {
    type: file.type,
  });

  const formData = new FormData();
  formData.append("file", renamedFile);
  await fetch(BACKEND_URL + "/content/upload/image", {
    method: "POST",
    body: formData,
  });
};

const editUserFetch = async (
  userId: string,
  data: EditFormValues,
  accessToken: string | undefined,
) => {
  const { firstName, lastName, phoneNumber } = data;
  return await fetchData(
    BACKEND_URL + `/users/${userId}`,
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

const getUserFetch = async (
  userId: string,
  accessToken: string | null | undefined,
) => {
  if (accessToken) {
    return await fetchData(`${BACKEND_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};

export { signUpFetch, profilePictureUploadFetch, editUserFetch, getUserFetch };
