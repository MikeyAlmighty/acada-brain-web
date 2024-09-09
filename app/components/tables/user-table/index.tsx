type LearnerTableProps = {
  learners: {
    firstName: string;
    lastName: string;
    username: string;
  }[];
};

const LearnerTable = ({ learners }: LearnerTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {/* <th>Avatar</th> */}
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {learners.map(({ firstName, lastName, username }) => (
            <tr className="hover">
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
