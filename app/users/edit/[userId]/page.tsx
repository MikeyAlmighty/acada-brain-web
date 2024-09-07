import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditUserForm from "@/app/components/forms/edit-user";
import Heading from "@/app/components/heading";
import { getUserFetch } from "@/app/fetch/user";

type EditUserPageProps = {
  params: {
    userId: string;
  };
};

export default async function EditUserPage({ params }: EditUserPageProps) {
  const { userId } = params;
  const session = await getServerSession(authOptions);
  const data = await getUserFetch(userId, session?.user?.accessToken);

  return (
    <div>
      <Heading text="Edit user" />
      <EditUserForm {...data} />
    </div>
  );
}
