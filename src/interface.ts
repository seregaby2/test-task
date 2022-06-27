export interface form {
  name: string;
  email: string;
  phone: string;
  date: string;
  text: string;
}

export interface error {
  nameError: string;
  emailError: string;
  phoneError: string;
  dateError: string;
  textError: string;
}

export interface response {
  message: string;
}
