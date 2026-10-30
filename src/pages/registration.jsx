import React, { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import sch from "../assets/image/SchEntrance.mp4";
import "../styles/registration.css";
import Modal from "../component/modal";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
  });

  const showModal = (title, message, type = "info") => {
    setModal({
      isOpen: true,
      title,
      message,
      type,
    });
  };

  const closeModal = () => {
    setModal((previous) => ({
      ...previous,
      isOpen: false,
    }));
  };

  const postreg = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const result = await fetch("https://prime-academy-backend-ufg5.onrender.com/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          age: Number(age),
          email: email.trim(),
          address: address.trim(),
          city: city.trim(),
        }),
      });

      const res = await result.json();

      if (!result.ok) {
        throw new Error(
          res.message || "Registration failed. Please try again.",
        );
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      setAddress("");
      setCity("");

      showModal(
        "Registration Successful",
        "Your registration has been submitted successfully.",
        "success",
      );
    } catch (err) {
      console.error("Registration error:", err);

      showModal(
        "Registration Failed",
        err.message || "Something went wrong. Please try again.",
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-page">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="reg-nav">
        <div className="reg-hero-content">
          <h1>
            Registration
            <br />
            Form
          </h1>

          <p>Fill in the form below to register</p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="reg-form-section">
        <div className="reg-form">
          <div className="form-heading">
            <h2>A FEW DETAILS TO GET STARTED</h2>

            <p>
              Please provide the required information about your student to help
              us prepare for a smooth and successful school experience. This
              information will assist our team in understanding your student’s
              needs and ensuring that the appropriate arrangements are made.
            </p>

            <p>
              After submitting the form, you will receive a confirmation email
              along with the next steps and any important information needed to
              complete the registration process.
            </p>
          </div>

          <form onSubmit={postreg}>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                placeholder="Enter student's first name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                placeholder="Enter student's last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Parent/Guardian Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Age */}
            <div className="form-group">
              <label htmlFor="age">Child's Age</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter child's age"
                min="1"
                max="20"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter home address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* City */}
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* Submit */}
            <div className="submit-container">
              <button
                type="submit"
                className="registration-submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Registration"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Admission Help Section */}
      <section className="admission-section">
        <div className="admission-video">
          <iframe
            src={sch}
            title="School Information Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="admission-content">
          <h2>HAVE QUESTIONS ABOUT ADMISSION?</h2>

          <p>
            Our admissions team is available to assist you with the application
            process, school requirements, program details, or any other
            questions you may have.
          </p>

          <p>
            We are happy to guide you through each step and ensure a smooth
            registration experience.
          </p>

          <div className="admission-buttons">
            <a href="tel:+234 814 4363 077" className="admission-btn call-btn">
              Call Us
            </a>

            <a
              href="mailto:emmanuelmarvel91@gmail.com?subject=Prime%20Education%20Academy%20Admission%20Enquiry"
              className="admission-btn email-btn"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onClose={closeModal}
      />
    </div>
  );
};

export default Registration;
