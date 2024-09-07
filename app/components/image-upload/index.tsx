"use client";

import { useState } from "react";
import Image from "next/image";

type ImageUploadProps = {
  showPreview?: boolean;
  handleUpload: (file: File | null) => void;
};

const ImageUpload = ({
  showPreview = true,
  handleUpload,
}: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const previewUrl = URL.createObjectURL(e?.target?.files[0]);
      setPreview(previewUrl);
      handleUpload(e.target.files[0]);
    }
  };

  return (
    <div className="pb-12 flex flex-col items-center justify-center">
      <div className="overflow-hidden rounded-full">
        {showPreview && preview ? (
          <Image
            className="object-cover"
            src={preview}
            alt="Preview Image"
            height={550}
            width={250}
          />
        ) : (
          <Image
            className="object-cover"
            src={"/default-avatar.svg"}
            alt="Default Image"
            height={550}
            width={250}
          />
        )}
      </div>

      <input
        className="file-input file-input-bordered my-12 file-input-primary w-full max-w-xs"
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUpload;
