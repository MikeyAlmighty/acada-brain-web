import { AddLesson } from "./add-lesson";

type LessonCardProps = {
  title: string;
  description: string;
};

const LessonCard = ({ title, description }: LessonCardProps) => {
  return (
    <div className="pt-2">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};
export default LessonCard;
