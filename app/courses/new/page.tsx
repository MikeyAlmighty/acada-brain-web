import Heading from "@/app/components/heading";

const NewCoursePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Add Course" />
      <div className="flex flex-col bg-neutral rounded h-[45vw] w-[45vw] items-center">
        <button className="btn btn-primary">Add Course</button>
      </div>
    </main>
  );
};

export default NewCoursePage;
