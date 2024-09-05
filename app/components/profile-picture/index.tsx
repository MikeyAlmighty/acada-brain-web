"use client";

import { BACKEND_URL } from "@/constants";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type ProfilePictureProps = {
  userId: number;
};

const ProfilePicture = ({ userId }: ProfilePictureProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    handleFetchImage();
  }, []);

  const handleFetchImage = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        BACKEND_URL + "/content/download",
        {
          userId,
        },
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setImageSrc(url);
    } catch (error) {
      console.error("Error fetching the image:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isLoading && <div className="skeleton h-40 w-64"></div>}
      {imageSrc && (
        <Image
          className="object-cover"
          width={250}
          height={250}
          src={imageSrc}
          alt="Profile Picture"
        />
      )}
    </div>
  );
};

export default ProfilePicture;
