import { useState } from "react";
import Navbar from "../components/Navbar";
import "./login.css";
import { Link } from "react-router-dom";

function Reg() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmpassword: confirmPassword,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Success message
      setMessage("✅ Registered Successfully");

      // Clear input fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      setMessage(error.message || "❌ Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="login-container">
        <form className="login-box" onSubmit={handleSubmit}>
          <h1>📝 Register</h1>

          <input
            type="text"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          {message && (
            <p
              style={{
                color: message.includes("Successfully") ? "green" : "red",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              {message}
            </p>
          )}

          <p>
            Already have an account?
            <Link to="/"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Reg;