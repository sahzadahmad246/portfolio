import React, { useState } from "react";
import { Button, TextField, CircularProgress, Alert } from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_USER_ID;
 

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        setLoading(false);
        setSuccessMessage("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        setLoading(false);
        setErrorMessage("Failed to send email. Please try again later.");
        console.error("Failed to send email:", error);
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField
              label="Your Name"
              name="name"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Your Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="text-center">
          <Button variant="contained" fullWidth type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
            </Button>
          </div>

          {successMessage && (
            <Alert severity="success" style={{ marginTop: "16px" }}>
              {successMessage}
            </Alert>
          )}

          {errorMessage && (
            <Alert severity="error" style={{ marginTop: "16px" }}>
              {errorMessage}
            </Alert>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
