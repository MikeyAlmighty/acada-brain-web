import { fetchData } from "@/app/lib/fetch-service";
import { BACKEND_URL } from "@/constants";

const getLecturerFetch = async (
  userId: string,
  accessToken: string | null | undefined,
) => {
  if (accessToken) {
    return await fetchData(`${BACKEND_URL}/lecturers/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};

const getLearnersForLecturer = async (
  lecturerId: string,
  accessToken: string,
) => {
  if (accessToken && lecturerId) {
    return await fetchData(`${BACKEND_URL}/lecturers/${lecturerId}/learners`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
};

export { getLecturerFetch, getLearnersForLecturer };
