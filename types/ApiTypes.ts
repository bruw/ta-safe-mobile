export type FlashMessage = {
  type: 'success' | 'error' | 'info' | 'warning';
  text: string;
}

export type User = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  created_at: string;
  updated_at: string;
  token: string;
};

export type UserAuth = {
  user: User;
  message: FlashMessage;
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
