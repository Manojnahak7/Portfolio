import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.css";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSent(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.error("Failed:", error.text);
          setError(true);
          setSent(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea name="message" placeholder="Your Message" rows="6" required />
        <button type="submit">Send Message</button>
        {sent && <p className="success-msg">Message sent successfully ✅</p>}
        {error && (
          <p className="error-msg">
            Oops! Something went wrong. Try again later ❌
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
