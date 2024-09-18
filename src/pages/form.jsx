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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        rows="3"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
}

export default EmailForm;
