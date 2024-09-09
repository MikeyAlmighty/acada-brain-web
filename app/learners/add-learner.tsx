"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AddLearner = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => router.push("/learners/new")}
      >
        Create Learner
      </button>
    </div>
  );
};
