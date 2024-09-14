import { useSession } from "next-auth/react";
import Heading from "../components/heading";
import { getLearnersForLecturer } from "../fetch/lecturer";
import { AddLearner } from "./add-learner";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import LearnerTable from "../components/tables/learner-table";

const UserPage = async () => {
  const session = await getServerSession(authOptions);
  const data =
    session?.id &&
    (await getLearnersForLecturer(session.id, session?.accessToken));

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Learners" />
      <div className="flex flex-col bg-neutral rounded h-[45vw] w-[45vw] justify-around items-center">
        <LearnerTable learners={data.learners} />
        <AddLearner />
      </div>
    </main>
  );
};

export default UserPage;
