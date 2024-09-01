import SignUpForm from "@/app/components/forms/sign-up";
import Heading from "@/app/components/heading";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Heading text="Sign up" />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
