import NewLearnerForm from "@/app/components/forms/new-learner";
import Heading from "@/app/components/heading";

const NewLearnersPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading text="Learners" />
      <div className="flex flex-col bg-neutral rounded h-[45vw] w-[45vw] items-center">
        <NewLearnerForm />
      </div>
    </main>
  );
};

export default NewLearnersPage;
