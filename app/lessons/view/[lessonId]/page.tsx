import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Heading from "@/app/components/heading";
import QuestionsCarousel from "@/app/components/questions-carousel";
import VideoCard from "@/app/components/video-card";
import { getLessonFetch } from "@/app/fetch/lesson";
import { LessonResponse } from "@/app/types/lesson";
import { getServerSession } from "next-auth";

type ViewLessonPageProps = {
  params: {
    lessonId: string;
  };
};

const LessonPage = async ({ params }: ViewLessonPageProps) => {
  const session = await getServerSession(authOptions);
  const data: LessonResponse =
    session?.accessToken &&
    (await getLessonFetch(session?.accessToken, params.lessonId));

  return (
    <div className="flex flex-col items-center justify-center">
      <Heading text={data.title} />
      <VideoCard description={data.description} videoSrc={data.videoUrl} />
      <div className="items-center">
        <QuestionsCarousel questions={data.questions} />
      </div>
    </div>
  );
};

export default LessonPage;
