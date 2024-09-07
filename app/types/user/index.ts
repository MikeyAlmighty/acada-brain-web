export type SignUpFormValues = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type SignUpResponse = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  id: number;
};