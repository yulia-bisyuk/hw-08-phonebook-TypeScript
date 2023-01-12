export type User = {
  name: string | null;
  email: string | null;
};
export type UserResultType = {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
};
export type UserQueryArgs = {
  name: string;
  email: string;
  password: string;
};

export interface UserState extends UserResultType {}

export type Contact = {
  id: string;
  token: string | null;
  name: string;
  number: string;
};

export type ContactList = Contact[];
