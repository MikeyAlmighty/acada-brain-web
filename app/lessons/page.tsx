import Heading from "@/app/components/heading";

const LessonPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Add Lesson" />
      <div className="flex flex-col bg-neutral rounded h-[45vw] w-[45vw] items-center">
        <button className="btn btn-primary">Add Lesson</button>
      </div>
    </main>
  );
};

export default LessonPage;
