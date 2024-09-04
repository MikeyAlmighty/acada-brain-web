"use client";

import { useRouter } from "next/navigation";

const AddLesson = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/lessons/new")}
      className="btn btn-primary"
    >
      Add Lesson
    </button>
  );
};

export default AddLesson;
