import { string, object } from "yup";

export const contactFormSchema = object({
  name: string()
    .min(3, "El nombre y apellido debe contener al menos 3 caracteres.")
    .max(50, "El nombre y apellido debe contener un máximo de 50 caracteres.")
    .required("El nombre y el apellido son requeridos."),
  email: string()
    .email("Es necesario que se tenga formato de correo electrónico.")
    .required("El correo electrónico es requerido."),
  phone: string()
    .min(7, "El número de teléfono debe contener al menos 7 caracteres.")
    .max(15, "El número de teléfono debe contener un máximo de 15 caracteres.")
    .required("El número de teléfono es requerido."),
  message: string()
    .min(5, "El mensaje debe contener un mínimo de 5 caracteres.")
    .max(255, "El mensaje debe contener un máximo de 255 caracteres.")
    .required("El mensaje es requerido.")
});

export const contactFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  message: ""
};