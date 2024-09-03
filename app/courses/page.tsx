import Image from "next/image";

import Heading from "../components/heading";
import AddCourse from "./add-course";

const CoursePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Courses" toUppercase={false} />
      <div className="flex flex-col items-center">
        <Image src="/Logo.svg" alt="AcadaBrain Logo" width={300} height={375} />
        <p className="pb-12">Oops! Looks like you have no courses</p>
        <AddCourse />
      </div>
    </main>
  );
};

export default CoursePage;
