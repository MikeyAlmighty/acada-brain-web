"use client";

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
  const [selectedLearnerIds, setSelectedLearnerIds] = useState<strin[]>([]);
  console.log(selectedLearnerIds);

  const handleLearnerSelect = (learnerId: string) => {
    if (selectedLearnerIds.includes(learnerId)) {
      setSelectedLearnerIds([
        ...selectedLearnerIds.filter((id) => id !== learnerId),
      ]);
    } else {
      setSelectedLearnerIds([...selectedLearnerIds, learnerId]);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {learners.map(({ id, firstName, lastName, username }) => (
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
