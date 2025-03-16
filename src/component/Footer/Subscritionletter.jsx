import React, { useState } from "react";
import "./Footer.scss";

const Subscribeletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic email validation
    if (!email) {
      setMessage("Email is required!");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Enter a valid email address!");
      return;
    }

    // Simulating success message
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear input field after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="subscribeForm">
        <input
          type="email"
          id="subscribeMail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your email"
          required
        />
        <button type="submit">SUBSCRIBE</button>
      </form>
      {message && <p id="message">{message}</p>}
    </div>
  );
};

export default Subscribeletter;
