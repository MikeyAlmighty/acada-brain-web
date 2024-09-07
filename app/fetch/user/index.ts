import { fetchData } from "@/app/lib/fetch-service";
import { SignUpFormValues, SignUpResponse } from "@/app/types/user";
import { BACKEND_URL } from "@/constants";

const signUpFetch = async (data: SignUpFormValues): Promise<SignUpResponse> => {
  return await fetchData(BACKEND_URL + "/users/signup", {
    method: "POST",
    body: JSON.stringify({ ...data }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const profilePictureUploadFetch = async (
  userId: number,
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

export { signUpFetch, profilePictureUploadFetch };
