"use client";

import { useRouter } from "next/navigation";

const AddCourse = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/lessons/new")}
      className="btn btn-primary"
    >
      Add Course
    </button>
  );
};

export default AddCourse;
