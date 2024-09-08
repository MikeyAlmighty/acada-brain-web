export type SignUpFormValues = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  lecturerId: string | null;
  isLecturer: boolean;
};

export type SignUpResponse = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  id: number;
};

export type EditFormValues = {
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
};
