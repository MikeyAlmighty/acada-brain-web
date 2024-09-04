import Heading from "@/app/components/heading";
import { AddLesson } from "../components/lesson-card/add-lesson";

const LessonPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Lessons" />
      <div className="flex flex-col bg-neutral rounded h-[45vw] w-[45vw] items-center">
        <AddLesson />
      </div>
    </main>
  );
};

export default LessonPage;
