import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Logind.css";

const Logind = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="page">
      <div className="login-card">
        <h2>
          <span className="line"></span> Login
        </h2>

        <div className="input-box">
          <span>📧</span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <span>🔒</span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </button>
        </div>

        <button className="btn" onClick={handleLogin}>
          Login Now
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Signup now</Link>
        </p>
      </div>
    </div>
  );
};

export default Logind;