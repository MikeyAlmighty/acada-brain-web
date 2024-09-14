"use client";

import { getLearnersForLecturer } from "@/app/fetch/lecturer";
import { Learner } from "@/app/types/learner";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type LearnerTableProps = {
  onLearnerSelect: (learnerId: string) => void;
};

const LearnerTable = ({ onLearnerSelect }: LearnerTableProps) => {
  const [learners, setLearners] = useState<Learner[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchLearners = async () => {
      if (session?.id) {
        const data = await getLearnersForLecturer(
          session.id,
          session?.accessToken,
        );
        console.log("data: ", data);
        setLearners(data);
      }
    };
    fetchLearners();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Avatar</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {learners.map(({ id, firstName, lastName, username, imgUrl }) => (
            <tr className="hover">
              <th>
                <label>
                  <input
                    type="checkbox"
                    onClick={() => onLearnerSelect(id)}
                    className="checkbox checkbox-primary"
                  />
                </label>
              </th>
              <th>
                <Image
                  src={imgUrl ?? "/default-avatar.svg"}
                  alt={"Profile Picture"}
                  width={25}
                  height={25}
                />
              </th>
              <th>{username}</th>
              <th>{firstName}</th>
              <th>{lastName}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LearnerTable;
