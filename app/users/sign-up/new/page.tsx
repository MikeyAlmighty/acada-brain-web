import SignUpForm from "@/app/components/forms/sign-up";
import Heading from "@/app/components/heading";

const NewUsersPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Learners" />
      <div className="flex flex-col bg-neutral rounded h-[45vw] w-[45vw] items-center">
        <SignUpForm />
      </div>
    </main>
  );
};

export default NewUsersPage;
