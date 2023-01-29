import Image from "next/image";
import Link from "next/link";

const headerData = ["courses", "lessons"];

const Header = () => (
  <div className="bg-gray-300 rounded border-2 border-pink-200 sticky top-0">
    <div className="sm:flex sm:items-center justify-center flex items-center">
      <div className="sm:w-28 sm:h-16 w-28 h-24 relative">
        <Image
          alt={"logo-icon"}
          src={"/acada-brain-logo.svg"}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="font-bold lg:text-4xl text-2xl text-center p-6 text-gray-500">
        AcadaBrain
      </p>
    </div>
  </div>
);

export default Header;
