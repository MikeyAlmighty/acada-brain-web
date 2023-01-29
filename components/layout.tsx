import { ReactNode } from "react";

import Header from "@components/header/index";
import SideBar from "@components/side-bar/index";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <SideBar />
      <main className="w-full h-screen bg-gray-200 flex flex-col items-center">
        {children}
      </main>
    </>
  );
};

export default Layout;
