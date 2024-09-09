import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

export default withAuth(function middleware(request: NextRequestWithAuth) {}, {
  callbacks: {
    authorized: ({ token }) => token?.role === "lecturer",
  },
});

export const config = { matcher: ["/users", "/lessons/new"] };
