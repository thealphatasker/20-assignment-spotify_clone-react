import React from "react";
import "./Support.css";
import Header from "./Header";

function Support() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="support-container">
        <div className="support-inner">
          <h2>Contact Support</h2>
          <p className="support-sub">
            Have questions or feedback? Send us a message.
          </p>

          <form className="support-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="How can we help?"
                required
              ></textarea>
            </label>

            <button className="support-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
