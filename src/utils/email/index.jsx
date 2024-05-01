import emailjs from "@emailjs/browser";

/**
 * @typedef {Object} TDetails
 * @property {String} toEmail
 * @property {String} fromName
 * @property {String} fromPhone
 * @property {String} subject
 * @property {String} message
 * 
 */

/**
 * Send custom emails with Emailjs.
 * @param {TDetails} details Details to send email.
 */
const sendCustomEmail = async (details) => {
  try {

    const userID = import.meta.env.VITE_EMAIL_USER_ID ?? null;

    if (!userID) {
      throw Error("La variable de entorno de usuario no ha sido declarada.")
    }

    const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID ?? null;

    if (!serviceID) {
      throw Error("La variable de entorno de servicio no ha sido declarada.")
    }

    const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID ?? null;

    if (!serviceID) {
      throw Error("La variable de entorno de plantilla no ha sido declarada.")
    }

    emailjs.init(userID);
    const send = await emailjs.send(
      serviceID,
      templateID,
      {
        to_email: details.toEmail,
        to_phone: details.fromPhone,
        from_name: details.fromName,
        reply_to: details.toEmail,
        subject: details.subject,
        message: details.message,
      });

      return send.status === 200 || send.text === "OK";

  } catch (error) {
    console.error(error);
    throw Error("No fue posible enviar el correo. " + error);
  }
};

export {
  sendCustomEmail
};