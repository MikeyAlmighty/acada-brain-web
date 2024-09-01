const UserPage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software Engineer with 10 years of experience in full-stack development.",
    profilePicture: "https://via.placeholder.com/150",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center h-screen">
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-center">
              <div className="avatar">
                <div className="w-24 h-24 rounded-full"></div>
              </div>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="mt-2 text-gray-600">{user.bio}</p>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserPage;
