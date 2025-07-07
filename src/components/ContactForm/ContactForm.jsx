import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="contact-form-container">
      <h3>It's all starts with hello.....</h3>
      <form className="contact-form" action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Sriram"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Contact email</label>
        <input
          type="text"
          placeholder="sriravisankar28@gmail.com"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="additional-info">Additional info</label>
        <textarea
          id="additional-info"
          rows="10"
          cols="40"
          placeholder="Details Here.."
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit" onSubmit={handleSubmit}>
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
}
