import { LessonResponse } from "@/app/types/lesson";

type QuestionsCarouselProps = {
  questions: LessonResponse["questions"];
};

const QuestionsCarousel = ({ questions }: QuestionsCarouselProps) => {
  return (
    <div>
      <div className="carousel w-full pt-12 h-[25vh]">
        <div className="carousel-item relative w-full absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          {questions?.map(({ id, question, answers }, index) => (
            <div
              key={id}
              id={`slide${index}`}
              className="carousel-item flex flex-col justify-center items-center w-full bg-neutral"
            >
              <div className="flex w-full justify-around">
                <a href={`#slide${index - 1}`} className="btn btn-circle">
                  {"<"}
                </a>
                <h1 className="text-xl mb-4">
                  {index + 1}. {question}
                </h1>
                <div>
                  {answers.map(({ id: answerId, isCorrect, option }, index) => (
                    <label key={answerId} className="label cursor-pointer">
                      <span className="label-text pr-2">{option}</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                      />
                    </label>
                  ))}
                </div>
                <a href={`#slide${index + 1}`} className="btn btn-circle">
                  {">"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsCarousel;
