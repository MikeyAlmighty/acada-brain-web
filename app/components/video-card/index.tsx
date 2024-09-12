"use client";

type VideoCardProps = {
  videoSrc: string;
  description: string;
};

const VideoCard = ({ videoSrc, description }: VideoCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <video className="w-[45vw] h-auto" controls src={videoSrc} />
      </figure>
      <div className="card-body text-center">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
