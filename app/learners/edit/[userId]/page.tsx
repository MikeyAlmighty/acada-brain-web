import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditUserForm from "@/app/components/forms/edit-user";
import Heading from "@/app/components/heading";
import { getLecturerFetch } from "@/app/fetch/lecturer";
import { getLearnerFetch } from "@/app/fetch/learner";

type EditLearnerPageProps = {
  params: {
    userId: string;
  };
};

const EditLearnerPage = async ({ params }: EditLearnerPageProps) => {
  const { userId } = params;
  const session = await getServerSession(authOptions);
  const data =
    session?.role === "lecturer"
      ? await getLecturerFetch(userId, session.accessToken)
      : await getLearnerFetch(userId, session?.accessToken);

  return (
    <div>
      <Heading text="Edit Learner" />
      <EditUserForm {...data} />
    </div>
  );
};

export default EditLearnerPage;
