import * as yup from "yup";

export interface Errors {
  [key: string]: string;
}
export function getValidationErrors(err: yup.ValidationError): Errors {
  //metodo que valida qualquer tipo de schema
  const validationErrors: Errors = {};
  err.inner.forEach((error) => {
    if (error.path) validationErrors[error.path] = error.message;
  });
  return validationErrors;
}

// interface Schemas
export interface Login {
  email: string;
  password: string;
}
export interface Register {
  name: string;
  email: string;
  cpf: string;
  celular: string;
  password: string;
  passwordConf: string;
}
// Schemas
export const userSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("O email não pode ser vazio")
    .email("Digite um email corretamente"),
  password: yup
    .string()
    .required("A senha não pode estar vazia")
    .min(6, "A senha deve conter no mínimo 6 caracteres"),
});

export const userSchemaRegister = yup.object().shape({
  email: yup
    .string()
    .required("O email não pode estar vazio")
    .email("Digite um email corretamente"),
  name: yup
    .string()
    .required("O campo Nome não pode estar vazio")
    .min(6, "O campo nome deve conter no mínimo 6 caracteres"),
  cpf: yup
    .string()
    .required("O capo CPF não pode estar vazio")
    .matches(
      /^\d{3}.\d{3}.\d{3}-\d{2}$/,
      "O campo CPF deve estar no modelo XXX.XXX.XXX-XX"
    ),
  celular: yup
    .string()
    .required("O campo celular não pode estar vazio")
    .matches(
      /^\(\d{2}\)\s*\d{5}\s*-\s*\d{4}$/,
      "O campo celular deve estar no modelo (XX) XXXXX-XXXX"
    ),
  password: yup
    .string()
    .required("A senha não pode estar vazia")
    .min(6, "A senha deve conter no mínimo 6 caracteres"),
  passwordConf: yup
    .string()
    .required("A senha não pode estar vazia")
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});
