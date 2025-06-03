"use client";
import React, { FC, useState } from "react";

import CustomPopup from "../common/CustomPopup";
import Loader from "../common/Loader";
import { hasMaliciousInput } from "@/[lang]/utils/api-helpers";
import { Button } from "@/components/ui/button";
import ContactSection from "../Forms/ContactSection";

type Data = {
  data: {
    data: {
      title: string;
      description: string;
    };
  };
};

const ContactForm: FC<Data> = ({ data }) => {
  const { title, description } = data.data;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (hasMaliciousInput(formData.name)) {
      newErrors.name = "Invalid characters detected.";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    } else if (hasMaliciousInput(formData.email)) {
      newErrors.email = "Invalid characters detected.";
      isValid = false;
    }

    if (formData.message && hasMaliciousInput(formData.message)) {
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } catch (error) {
        console.error("Failed to send email:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <CustomPopup
        show={showPopup}
        text="Your email has been sent!"
        type="success"
      />
      {isLoading && <Loader text="Sending..." />}
      <ContactSection
        title={title}
        description={description}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        errors={errors}
      />
    </>
  );
};

export default ContactForm;
