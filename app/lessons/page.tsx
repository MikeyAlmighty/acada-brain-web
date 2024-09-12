import { getServerSession } from "next-auth";

import Heading from "@/app/components/heading";
import { AddLesson } from "../components/lesson-card/add-lesson";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LessonCard from "../components/lesson-card";
import {
  getLessonsByLecturerFetch,
  getLessonsByLearnerFetch,
} from "../fetch/lesson";

const LessonPage = async () => {
  const session = await getServerSession(authOptions);
  const data =
    session?.accessToken &&
    (session.role === "lecturer"
      ? await getLessonsByLecturerFetch(session?.accessToken, session.id)
      : await getLessonsByLearnerFetch(session?.accessToken, session.id));

  return (
    <main className="flex flex-col m-w-[25vw] items-center justify-around">
      <Heading text="Lessons" />
      <div className="flex flex-col rounded h-[35vw] w-[35vw] items-center">
        <div className="grid grid-cols-3 gap-4 p-4">
          {data?.map(({ id, title, description }) => (
            <LessonCard
              key={id}
              id={id}
              title={title}
              description={description}
            />
          ))}
        </div>
        <AddLesson />
      </div>
    </main>
  );
};

export default LessonPage;
