import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  contactFormDefaultValues,
  contactFormSchema
} from "../../utils/validations/contactDefaultValues";

import StyledInput from "./StyledInput";
import SubmitButton from "./SubmitButton";
import StyledArea from "./StyledArea";

import useLoading from "../../hooks/useLoading";
import useToast from "../../hooks/useToast";
import { sendCustomEmail } from "../../utils/email";

const ContactForm = () => {

  const { isLoading, startLoading, stopLoading } = useLoading();
  const { showSuccessToast, showErrorToast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues
  });


  const onSubmit = async (values) => {
    startLoading();
    try {

      if (!isValid || isLoading) {
        showErrorToast("No fue posible enviar el mensaje.");
        console.log(errors);
        return;
      }

      const res = await sendCustomEmail({
        toEmail: values.email,
        fromName: values.name,
        fromPhone: values.phone,
        subject: "Consulta",
        message: `${values.message}\n\n${values.phone}\n${values.email}`
      });

      if (res) {
        showSuccessToast("El mensaje fue enviado con éxito.");
        reset();
  
        console.info(values);

        return;
      }

      showErrorToast("El mensaje no pudo ser enviado, intente más tarde.");

    } catch (error) {
      console.error(error);
      showErrorToast(error);
    } finally {
      stopLoading();
    }
  };

  return (
    <form
      className="w-[80%] flex flex-col space-y-10 pb-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className="grid md:grid-cols-1 space-y-[65px]"
      >
        <Controller
          name="name"
          control={control}
          render={({
            field: { onChange, onBlur, value, ...field }
          }) => (
            <StyledInput
              id="name"
              placeholder="Nombre y apellido"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...field}
            />
          )}
        />


        <div
          className="grid lg:grid-cols-2 lg:space-x-6 xl:space-x-10 lg:space-y-0 space-y-10"
        >

          <Controller
            name="email"
            control={control}
            render={({
              field: { onChange, onBlur, value, ...field }
            }) => (
              <StyledInput
                id="email"
                placeholder="Correo electrónico"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...field}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({
              field: { onChange, onBlur, value, ...field }
            }) => (
              <StyledInput
                id="phone"
                placeholder="Número de teléfono"
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...field}
              />
            )}
          />
        </div>

        <Controller
            name="message"
            control={control}
            render={({
              field: { onChange, onBlur, value, ...field }
            }) => (
              <StyledArea
                id="message"
                label="Mensaje"
                error={Boolean(errors.message)}
                helperText={errors.message?.message}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...field}
              />
            )}
          />

      </div>

      <div
        className="w-full flex flex-col items-end"
      >
        <SubmitButton
          isLoading={isLoading}
          disabled={isLoading}
          label={isLoading ? "Enviando" : "Enviar mensaje"}
          type="submit"
        />
      </div>

    </form>
  );
};

export default ContactForm;