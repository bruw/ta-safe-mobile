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

export type UserMinimalInfo = {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  created_at: string;
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

export type DeviceTransferStatus = {
  status: 'pending' | 'accepted' | 'canceled' | 'rejected';
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
  status: DeviceTransferStatus['status'];
  source_user: UserMinimalInfo;
  target_user: UserMinimalInfo;
  updated_at: string;
  device?: Device;
}

export type SharingToken = {
  id: number,
  token: string,
  expires_at: string;
}

export type Device = {
  id: number;
  color: string;
  imei_1: string;
  imei_2: string;
  access_key?: string;
  sharing_token?: SharingToken;
  validation_status: DeviceValidationStatus['validation_status'];
  created_at: string;
  updated_at: string;
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
  id: number;
  token: string;
  expires_at: string;
}

export type SearchDevice = {
  token: string;
}

export type SearchUserByEmail = {
  email: string;
}

export type SearchedUser = {
  message: FlashMessage;
  user: User;
}

export type UpdatedTransfer = {
  message: FlashMessage;
  transfer: Transfer;
}