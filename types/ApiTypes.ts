export type User = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  created_at: string;
  updated_at: string;
};

export type UserAfterRegister = {
  user: User;
  token: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type UserRegistration = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  password_confirmation: string;
};
