import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registerd.css";

const Registerd = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister =( ) => {
    alert("Registration Successful");

    localStorage.setItem(
        "user",
        JSON.stringify({ name, email, password})
        
    );
    navigate("/");
  };

  const handleRegisterd = () => {
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
    navigate("/");
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
            placeholder="Create password"
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

        <button className="btn" onClick={handleRegister}>
          Register Now
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/">Login now</Link>
        </p>

      </div>
    </div>
  );
};

export default Registerd;