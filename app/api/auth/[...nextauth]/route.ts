import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

import { BACKEND_URL } from "@/constants";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
        role: {
          label: "Role",
          type: "text",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;

        const { username, password, role } = credentials;
        try {
          const res = await fetch(BACKEND_URL + "/auth/login", {
            method: "POST",
            body: JSON.stringify({
              username,
              password,
              role,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.status === 401) {
            console.log(res.statusText);

            return null;
          }

          const user = await res.json();
          if (user && user.accessToken) {
            return user;
          }
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.username = user.username;
        token.role = user.role;
        token.imgUrl = user.imgUrl;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.username = token.username;
      session.role = token.role;
      session.imgUrl = token.imgUrl;
      session.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
