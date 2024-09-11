import { getServerSession } from "next-auth";

import Heading from "@/app/components/heading";
import { AddLesson } from "../components/lesson-card/add-lesson";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getLessonsFetch } from "../fetch/lesson";
import LessonCard from "../components/lesson-card";

const LessonPage = async () => {
  const session = await getServerSession(authOptions);
  const data =
    session?.accessToken && (await getLessonsFetch(session?.accessToken));
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Lessons" />
      <div className="flex flex-col bg-neutral rounded h-[45vw] w-[45vw] items-center">
        <div className="flex">
          {data.map(({ id, title, description }) => (
            <LessonCard key={id} title={title} description={description} />
          ))}
        </div>
        <AddLesson />
      </div>
    </main>
  );
};

export default LessonPage;
