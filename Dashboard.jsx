import React from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    flex: "1",
    minWidth: "180px"
  };

  return (
    <div style={{ background: "#f4f7fc", minHeight: "100vh", padding: "30px" }}>

      <div style={{
        background: "#3f63f5",
        color: "#fff",
        padding: "15px 25px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2>FlowTrack360 Dashboard</h2>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <h2>Welcome, Apeksha Patil 👋</h2>
        <p>Employee Management System</p>
      </div>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>

        <div style={cardStyle}>
          <h3>Total Employees</h3>
          <h2>120</h2>
        </div>

        <div style={cardStyle}>
          <h3>Present Today</h3>
          <h2>110</h2>
        </div>

        <div style={cardStyle}>
          <h3>Pending Leaves</h3>
          <h2>8</h2>
        </div>

        <div style={cardStyle}>
          <h3>Completed Tasks</h3>
          <h2>45</h2>
        </div>

      </div>

      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <h2>Employee Details</h2>

        <p><strong>Name:</strong> Apeksha Patil</p>
        <p><strong>Employee ID:</strong> EMP001</p>
        <p><strong>Department:</strong> Frontend</p>
        <p><strong>Email:</strong> apeksha@gmail.com</p>
        <p><strong>Status:</strong> Active</p>
      </div>

    </div>
  );
};

export default Dashboard;