import { useState } from "react";
import { MdDone } from "react-icons/md";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending message
    setTimeout(() => {
      setMessageSent(true);

      // Clear inputs
      setName("");
      setEmail("");
      setMessage("");

      // Hide notification after 3s
      setTimeout(() => setMessageSent(false), 3000);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center rounded p-10 backdrop-blur-sm bg-white/30 text-white max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6 text-center">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you soon.
      </p>

      {messageSent && (
        <div className="flex items-center gap-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded shadow-sm w-full mb-4">
          <MdDone className="text-green-600 text-lg" />
          <span>Message sent successfully!</span>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full text-gray-800"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-950 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors mt-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
