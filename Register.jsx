import React, { useState } from "react";
import "./Register.css";

const Register = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    onLogin();
  };

  return (
    <div className="page">
      <div className="register-card">
        <h2>
          <span className="line"></span> Registration
        </h2>

        <div className="input-box">
          <span>👤</span>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
            placeholder="Create a password"
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

        <div className="input-box">
          <span>🔒</span>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="button"
            className="eye"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            👁
          </button>
        </div>

        <div className="terms">
          <label>
            <input type="checkbox" />
            I accept all terms & conditions
          </label>
        </div>

        <button className="btn" onClick={handleRegister}>
          Register Now
        </button>

        <p>
          Already have an account?
          <span onClick={onLogin}>Login now</span>
        </p>
      </div>
    </div>
  );
};

export default Register;