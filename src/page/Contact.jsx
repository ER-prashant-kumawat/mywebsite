import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          setTimeout(() => setSuccess(false), 4000);
        },
        () => {
          alert("Something went wrong. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="section contact-section" id="Contact">
      <h2 className="title">Contact Me</h2>
      <p className="contact-subtitle">Let’s build something great together 🚀</p>

      <div className="contact-wrapper">
        {/* ---------- FORM ---------- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
            <label>Your Name</label>
          </div>

          <div className="input-box">
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
            <label>Your Email</label>
          </div>

          <div className="input-box">
            <textarea rows="4" name="message" value={form.message} onChange={handleChange} required></textarea>
            <label>Your Message</label>
          </div>

          <button className="btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="success-msg">✅ Message sent successfully!</p>}

          {/* ---------- WHATSAPP BUTTON ---------- */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>
        </form>

        {/* ---------- MAP ---------- */}
        <div className="map-box">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=Jaipur,+India&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
