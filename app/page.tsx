import Image from "next/image";
import dynamic from "next/dynamic";

import LoginForm from "./components/forms/login";
import Heading from "./components/heading";

const ClientToastContainer = dynamic(() => import("@/app/components/toasty"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Heading text="AcadaBrain" toUppercase={false} />
      <Image src="/Logo.svg" alt="AcadaBrain Logo" width={300} height={375} />
      <div className="flex h-screen">
        <LoginForm />
      </div>
      <ClientToastContainer />
    </main>
  );
}
