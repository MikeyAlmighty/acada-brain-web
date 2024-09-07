import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditUserForm from "@/app/components/forms/edit-user";
import Heading from "@/app/components/heading";
import { BACKEND_URL } from "@/constants";

type EditUserPageProps = {
  params: {
    userId: string;
  };
};

export default async function EditUserPage({ params }: EditUserPageProps) {
  const { userId } = params;
  const session = await getServerSession(authOptions);
  const res = await fetch(`${BACKEND_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return (
    <div>
      <Heading text="Edit user" />
      <EditUserForm {...data} />
    </div>
  );
}
