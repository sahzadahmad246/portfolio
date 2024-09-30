import React from "react";
import { Button, TextField } from "@mui/material";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div className="text-center">
            <Button variant="contained" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
