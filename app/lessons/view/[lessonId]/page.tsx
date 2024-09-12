import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Heading from "@/app/components/heading";
import VideoCard from "@/app/components/video-card";
import { getLessonFetch } from "@/app/fetch/lesson";
import { getServerSession } from "next-auth";

type ViewLessonPageProps = {
  params: {
    lessonId: string;
  };
};

const LessonPage = async ({ params }: ViewLessonPageProps) => {
  const session = await getServerSession(authOptions);
  const data =
    session?.accessToken &&
    (await getLessonFetch(session?.accessToken, params.lessonId));
  console.log("data123: ", data);

  return (
    <div>
      <Heading text={data.title} />
      <VideoCard description={data.description} videoSrc={data.videoUrl} />
    </div>
  );
};

export default LessonPage;
