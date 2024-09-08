"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  if (status === "loading") {
    return null; // Or return a loading spinner
  }

  return (
    <header className="navbar bg-primary shadow-md">
      <div className="flex-1">
        <span className="btn-primary text-white normal-case text-4xl">
          AcadaBrain
        </span>
      </div>

      <div className="flex-none gap-2">
        {status === "authenticated" ? (
          <>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={session?.imgUrl || "/default-avatar.svg"}
                    alt="User Avatar"
                  />
                </div>
              </label>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a
                      onClick={() => router.push(`/users/edit/${session.id}`)}
                      className="justify-between"
                    >
                      {session?.username}
                      <span className="badge badge-secondary">
                        {session.role === "lecturer" ? "Lecturer" : "Learner"}
                      </span>
                    </a>
                    <a
                      onClick={() => router.push(`/lessons`)}
                      className="justify-between"
                    >
                      Lessons
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        signOut({ redirect: true, callbackUrl: "/" })
                      }
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
