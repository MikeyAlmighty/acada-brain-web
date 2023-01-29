import Link from "next/link";

const sideBarData = [
  { name: "My Courses", href: "/courses" },
  { name: "Classroom", href: "/users" },
];

const SideBar = () => {
  return (
    <div className="bg-gray-300 border-2 border-pink-200 h-screen overflow-y-hidden w-1/12 left-0 top-18 absolute">
      <div className="flex-col justify-between">
        {sideBarData.map(({ name, href }) => (
          <Link
            className="flex hover:border-gray-500 hover:bg-pink-200 hover:rounded-lg text-xl"
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
