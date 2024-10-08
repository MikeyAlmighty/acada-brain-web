import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    id: string;
    username: string;
    imgUrl: string;
    role: "lecturer" | "learner";
  }
}
