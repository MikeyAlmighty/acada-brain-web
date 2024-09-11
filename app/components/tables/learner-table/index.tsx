"use client";

import Image from "next/image";
import { useState } from "react";

type LearnerTableProps = {
  learners: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
  }[];
};

const LearnerTable = ({ learners }: LearnerTableProps) => {
  const [selectedLearnerIds, setSelectedLearnerIds] = useState<string[]>([]);

  const handleLearnerSelect = (learnerId: string) => {
    if (selectedLearnerIds.includes(learnerId)) {
      setSelectedLearnerIds([
        ...selectedLearnerIds.filter((id) => id !== learnerId),
      ]);
    } else {
      setSelectedLearnerIds([...selectedLearnerIds, learnerId]);
    }
  };
  console.log("learners: ", learners);

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
                    onClick={() => handleLearnerSelect(id)}
                    className="checkbox checkbox-primary"
                  />
                </label>
              </th>
              <th>
                <Image
                  src={imgUrl ? imgUrl : "/default-avatar.svg"}
                  width={25}
                  height={25}
                  alt={"Profile Picture"}
                />
              </th>
              <th>{firstName}</th>
              <th>{lastName}</th>
              <th>{username}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LearnerTable;
