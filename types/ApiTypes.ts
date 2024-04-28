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
  id: number,
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  password_confirmation: string;
};

export type UserUpdate = {
  name: string;
  email: string;
  phone: string;
  message: FlashMessage;
}

export type Brand = {
  id: number;
  name: string;
}

export type DeviceModel = {
  id: number;
  name: string;
  ram: string;
  storage: string;
  brand: Brand;
}

export type DeviceRegistration = {
  device_model_id: number;
  color: string;
  access_key: string;
  imei_1: string;
  imei_2: string
}

export type DeviceValidationStatus = {
  validation_status: 'pending' | 'validated' | 'rejected';
}

export type Device = {
  id: number;
  color: string;
  imei_1: string;
  imei_2: string;
  access_key?: string;
  sharing_token?: string;
  validation_status: DeviceValidationStatus['validation_status'];
  created_at: string;
  updated_at: string;
  user: User;
  device_model: DeviceModel
}