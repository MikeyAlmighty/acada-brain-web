import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { getServerSession } from "next-auth";
import multer from "multer";
import { authOptions } from "./auth/[...nextauth]/route";

const upload = multer({ storage: multer.memoryStorage() });

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(upload.single("file")).post(async (req, res) => {
  const session = await getServerSession(authOptions);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      body: req.file.buffer,
      headers: {
        "Content-Type": req.file.mimetype,
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error uploading file" });
  }
});

export default handler;
