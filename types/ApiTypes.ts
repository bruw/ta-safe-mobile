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
  created_at: Date;
  updated_at: Date;
  token: string;
};

export type UserMinimalInfo = {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  created_at: Date;
}

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

export type DeleteDevice = {
  message: FlashMessage;
}

export type DeviceValidationStatus = {
  validation_status: 'pending' | 'in_analysis' | 'validated' | 'rejected';
}

export type ValidationAttributes = {
  cpf: boolean;
  user_name: boolean;
  brand_name: boolean;
  model_name: boolean;
  color: boolean;
  ram: boolean;
  storage: boolean;
  imei_1: boolean;
  imei_2: boolean;
}

export type Transfer = {
  id: number;
  status: DeviceValidationStatus['validation_status'];
  source_user: UserMinimalInfo;
  target_user: UserMinimalInfo;
  updated_at: Date;
}

export type SharingToken = {
  id: number,
  token: string,
  expires_at: Date;
}

export type Device = {
  id: number;
  color: string;
  imei_1: string;
  imei_2: string;
  access_key?: string;
  sharing_token?: SharingToken;
  validation_status: DeviceValidationStatus['validation_status'];
  created_at: Date;
  updated_at: Date;
  user: User;
  device_model: DeviceModel;
  validation_attributes?: ValidationAttributes;
  transfers_history?: Transfer[];
}

export type UpdatedDevice = {
  device: Device;
  message: FlashMessage;
}

export type InvalidatedDevice = {
  device: Device;
  message: FlashMessage;
}

export type DeviceSharedToken = {
  message: FlashMessage;
  token: string;
  expires_at: Date;
}

export type SearchDevice = {
  token: string;
}