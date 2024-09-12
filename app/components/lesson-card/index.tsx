"use client";
import { useRouter } from "next/navigation";

type LessonCardProps = {
  title: string;
  id: string;
  description: string;
};

const LessonCard = ({ id, title, description }: LessonCardProps) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/lessons/view/${id}`)} className="pt-2">
      <div className="transition-transform duration-300 hover:scale-110 cursor-pointer card h-[20vh] bg-base-100 shadow-xl">
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
