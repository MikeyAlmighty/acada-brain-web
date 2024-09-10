import { BACKEND_URL } from "@/constants";

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

const videoUploadFetch = async (
  videoId: string,
  file: File | null | undefined,
) => {
  if (!file) return;

  const renamedFile = new File([file], `content/${videoId}.mp4`, {
    type: file.type,
  });

  const formData = new FormData();
  formData.append("file", renamedFile);
  await fetch(BACKEND_URL + "/content/upload/video", {
    method: "POST",
    body: formData,
  });
};

export { profilePictureUploadFetch, videoUploadFetch };
