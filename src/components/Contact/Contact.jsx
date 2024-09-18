import React, { useState } from "react";
import axios from "axios";
import css from "./Contact.module.scss";
import { FaUser, FaEnvelope, FaWhatsapp, FaPhone, FaTag, FaPaperPlane , FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showQR, setShowQR] = useState(false); // State for QR popup

  const handleRedirection = () => {
    window.open("https://wa.me/qr/HH7A3DGBJ2T3D1", "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Field validation
    if (!formData.fullname || !formData.phone || !formData.email || !formData.subject || !formData.message) {
      setStatus("All fields are required.");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    
    setStatus("");
    setLoading(true);

    try {
      const response = await axios.post("https://email-whatsapp-z9yu.onrender.com/send-email", formData);
      if (response.status === 200) {
        setLoading(false);
        setShowPopup(true);
        // Reset the form data to clear the form fields
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setLoading(false);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className={css.contactWrapper}>
      <div className={css.innerContainer}>
        <h1 className={css.title}>Get in Touch</h1>
        <p className={css.subtitle}>We'd love to hear from you. Drop us a message, and we'll get back to you!</p>

        <div className={css.contactContent}>
          
          <form onSubmit={handleSubmit} className={css.contactForm}>
            <div className={css.inputGroup}>
              <FaUser className={css.icon} />
              <input 
                type="text" 
                name="fullname" 
                placeholder="Your Name" 
                value={formData.fullname} 
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} 
              />
            </div>

            <div className={css.inputGroup}>
              <FaPhone className={css.icon} />
              <input 
                type="text" 
                name="phone" 
                placeholder="Your Phone" 
                value={formData.phone} 
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              />
            </div>

            <div className={css.inputGroup}>
              <FaEnvelope className={css.icon} />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              />
            </div>

            <div className={css.inputGroup}>
              <FaTag className={css.icon} />
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject} 
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })} 
              />
            </div>

            <div className={css.inputGroup}>
              <FaPaperPlane className={css.icon} />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
              />
            </div>

            <button type="submit" className={css.submitButton}>
              {loading ? <FaSpinner className={css.spinner} /> : "Send Message"}
            </button>
            {status && <p className={css.statusMessage}>{status}</p>}
          </form>

          <div className={css.contactDetails}>
          <div className={css.contactImage}>
            <img src="/contact.jpg" alt="Contact Us" />
          </div>
          <div>
            <FaWhatsapp 
              className={css.largeIcon} 
              onClick={() => setShowQR(true)}  // Show QR popup on click
            />
            <p>Reach out via WhatsApp for quicker responses.</p>
            <p><strong>Phone:</strong> +91 97878 67648</p>
            <p><strong>Email:</strong> kamalnath9669@gmail.com</p>
          </div>
          </div>
        </div>

        {showPopup && (
          <div className={css.popupOverlay}>
            <div className={css.popupContent}>
              <button className={css.closeButton} onClick={() => setShowPopup(false)}>×</button>
              <h2>Thank You!</h2>
              <p>Your message has been sent. We will get back to you soon.</p>
            </div>
          </div>
        )}

        {showQR && (  // WhatsApp QR Popup
          <div className={css.popupOverlay}>
            <div className={css.popupContent}>
              <button className={css.closeButton} onClick={() => setShowQR(false)}>×</button>
              <h2>Kamal Nath WhatsApp</h2>
              <img className={css.whatsappImg} src="/whatsapp.jpeg" alt="WhatsApp QR Code" />
              <p>Scan this code using the WhatsApp camera to get my number or click below.</p>
              <button className={css.redirectButton} onClick={handleRedirection}>
                Click Here
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
