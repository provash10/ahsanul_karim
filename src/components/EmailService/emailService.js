import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_6bieldw";
const TEMPLATE_ID = "template_wky3pcj";
const PUBLIC_KEY  = "eAEAaA48o4nx5Qk-B";

/**
 * Send an email via EmailJS.
 * @param {{ name: string, email: string, subject: string, message: string }} formData
 */
export const sendEmail = async ({ name, email, subject, message }) => {
    const now = new Date();
    const time = now.toLocaleString("en-US", {
        year: "numeric", month: "long", day: "numeric",
        hour: "2-digit", minute: "2-digit"
    });

    await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            name:       name || email,
            from_email: email,
            subject:    subject || "New Message",
            message:    message,
            time:       time,
        },
        PUBLIC_KEY
    );
};
