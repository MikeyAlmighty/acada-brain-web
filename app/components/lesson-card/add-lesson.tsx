"use client";

import { useRouter } from "next/navigation";

export const AddLesson = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/lessons/new")}
      >
        Create Lesson
      </button>
    </div>
  );
};
