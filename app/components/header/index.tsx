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
        <a className="btn btn-primary text-white normal-case text-xl">
          Acada Brain
        </a>
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
                    src={session?.user?.image || "/default-avatar.svg"}
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
                      onClick={() =>
                        router.push(`/users/edit/${session.user.id}`)
                      }
                      className="justify-between"
                    >
                      {session?.user?.name}
                      <span className="badge badge-secondary">User</span>
                    </a>
                    <a
                      onClick={() => router.push(`/lessons`)}
                      className="justify-between"
                    >
                      Lessons
                    </a>
                  </li>
                  <li>
                    <a onClick={() => signOut()}>Logout</a>
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
