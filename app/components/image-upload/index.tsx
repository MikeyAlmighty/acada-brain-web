"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { BACKEND_URL } from "@/constants";
import Image from "next/image";

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const { data: session } = useSession();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      const previewUrl = URL.createObjectURL(e?.target?.files[0]);
      setPreview(previewUrl);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const newFileName = `${session?.user.id}.png`;
    const renamedFile = new File([file], newFileName, { type: file.type });

    const formData = new FormData();
    formData.append("file", renamedFile);
    try {
      const response = await axios.post(
        BACKEND_URL + "/content/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
        },
      );
      setFileUrl(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="pb-12 flex flex-col items-center justify-center">
      {preview && (
        <div className="overflow-hidden rounded-full">
          <Image
            className="object-cover"
            src={preview}
            alt="Preview"
            height={250}
            width={250}
          />
        </div>
      )}
      <input className="file-input file-input-bordered my-12 file-input-primary w-full max-w-xs" type="file" onChange={handleFileChange} />
      <button
        className="btn btn-neutral w-full"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {fileUrl && (
        <div className="pt-1">
          <img className="rounded" src={fileUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
