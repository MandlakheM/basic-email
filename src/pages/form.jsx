import { useState } from "react";
import axios from "axios";

function EmailForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3030/api/send", {
        from: "mangumtamandilakhe7@gmail.com",
        to,
        subject,
        message,
      });

      alert("Email sent!");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Welcome</h2>
        <p>Please enter the required information to send an email.</p>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="email">Send email to :</label>
            <input
              type="email"
              id="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="subject">Email subject :</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="message">Email message :</label>
            <textarea
              rows="3"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="submitBtn" type="submit">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailForm;
