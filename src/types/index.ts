export interface APIResponse {
  error: null | string;
  data: null | ContactFormType | WaiverFormType;
}

export interface ContactFormType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface WaiverFormType {
  firstName: string;
  lastName: string;
  birthday: string;
  phone: string;
  email: string | null;
  promotions: boolean;
  waiverSigned: string;
  waiverAgreed: boolean;
  signatureAgreed: boolean;
}
