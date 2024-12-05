/* eslint-disable no-useless-escape */
// Expresiones regulares
const ExpName: RegExp = /^[a-zA-Z\s]*$/;
const ExpEmail: RegExp =
  /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
const ExpAddress: RegExp = /^[a-zA-ZÀ-ÿ0-9\s\.\,\#\-\/\º\ª\(\)]+$/;
const ExpIdentificationNumber: RegExp = /^\d+$/;

// Tipos
interface ValidationMessages {
  MSM_USERNAME: string;
  MSM_EMAIL: string;
  MSM_AGE: string;
  MSM_ADDRESS: string;
  MSM_IDENTIFICATION_NUMBER: string;
  MSM_IDENTIFICATION_TYPE: string;
}

interface UserDataValues {
  name: string;
  email: string;
  age: number;
  address?: string;
  identificationNumber: string;
  identificationType: string;
}

interface ValidationErrors {
  [key: string]: string;
}

// Mensajes de validación
export const messageList: ValidationMessages = {
  MSM_USERNAME: "El mombre solo puede contener letras y espacios.",
  MSM_EMAIL: "El correo no es válido.",
  MSM_AGE: "La edad debe ser un número mayor a 0.",
  MSM_ADDRESS: "La dirección contiene caracteres no permitidos.",
  MSM_IDENTIFICATION_NUMBER:
    "El número de identificación debe ser numérico sin espacios.",
  MSM_IDENTIFICATION_TYPE: "El tipo de identificación es requerido.",
};

// Función de validación
export const validateUserDataForm = (
  values: UserDataValues
): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Validar nombre
  if (!values.name) {
    errors.name = messageList.MSM_USERNAME;
  } else if (!ExpName.test(values.name)) {
    errors.name = messageList.MSM_USERNAME;
  }

  // Validar correo
  if (!values.email) {
    errors.email = "El correo electrónico es requerido.";
  } else if (!ExpEmail.test(values.email)) {
    errors.email = messageList.MSM_EMAIL;
  }

  // Validar edad
  if (!values.age) {
    errors.age = "La edad es requerida.";
  } else if (isNaN(Number(values.age)) || Number(values.age) <= 0) {
    errors.age = messageList.MSM_AGE;
  }

  // Validar dirección
  if (!values.address) {
    errors.address = "La dirección es requerida.";
  } else if (!ExpAddress.test(values.address)) {
    errors.address = messageList.MSM_ADDRESS;
  }

  // Validar número de identificación
  if (!values.identificationNumber) {
    errors.identificationNumber = "El número de identificación es requerido.";
  } else if (!ExpIdentificationNumber.test(values.identificationNumber)) {
    errors.identificationNumber = messageList.MSM_IDENTIFICATION_NUMBER;
  }

  // Validar tipo de identificación
  if (!values.identificationType) {
    errors.identificationType = messageList.MSM_IDENTIFICATION_TYPE;
  }

  return errors;
};
