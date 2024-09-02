import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      sub: string;
      accessToken: string;
      id: number;
      firstName: string;
      lastName: string;
      username: string;
      phoneNumber: string;
    };
  }
}
