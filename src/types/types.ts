export type User = {
  name: string | null;
  email: string | null;
};
export type UserResultType = {
  user: User;
  token: string;
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
  name: string;
  number: string;
  token?: string;
};

export type ContactListType = Contact[];

export interface RoutesPropsType {
  children: JSX.Element;
  restricted?: boolean;
  navigateTo?: string | any;
}

export interface FormValues {
  name: string;
  number: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegistrationFormValues {
  name: string;
  email: string;
  password: string;
}

export type ResetForm = {
  resetForm: () => void;
};
