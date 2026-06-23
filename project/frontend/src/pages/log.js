import { useState } from "react";
import Navbar from "../components/Navbar";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Log() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");
        setIsSubmitting(true);

        try {
            const response = await fetch("/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const contentType = response.headers.get("content-type") || "";
            const data = contentType.includes("application/json")
                ? await response.json()
                : { message: await response.text() };

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            setMessage("✅ Logged in Successfully");

            // Redirect after 2 seconds
            setTimeout(() => {
                navigate("/home");
            }, 2000);

        } catch (error) {
            setMessage(error.message || "❌ Login failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Navbar />

            <div className="login-container">
                <form className="login-box" onSubmit={handleSubmit}>
                    <h1>🔐 Login</h1>

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

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>

                    {message && (
                        <p
                            style={{
                                color: message.includes("Successfully")
                                    ? "green"
                                    : "red",
                                marginTop: "10px",
                                fontWeight: "bold",
                            }}
                        >
                            {message}
                        </p>
                    )}

                    <p>
                        Don't have an account?
                        <Link to="/register"> Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Log;