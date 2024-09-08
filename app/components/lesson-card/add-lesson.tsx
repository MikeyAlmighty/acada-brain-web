"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AddLesson = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div>
      {session?.role === "lecturer" ? (
        <button
          className="btn btn-secondary"
          onClick={() => router.push("/lessons/new")}
        >
          Create Lesson
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
