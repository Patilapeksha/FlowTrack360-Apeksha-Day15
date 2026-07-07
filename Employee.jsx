import React, { useState } from "react";
import "./Employee.css";

const Employee = () => {

  const [search, setSearch] = useState("");

  const [employeeList, setEmployeeList] = useState([
    {
      id: 1,
      name: "Aarav Mehta",
      role: "Frontend Developer",
      department: "IT",
      email: "aarav.mehta@company.com",
      phone: "9876543210",
      status: "Active"
    },
    {
      id: 2,
      name: "Ananya Sharma",
      role: "Backend Developer",
      department: "IT",
      email: "ananya.sharma@company.com",
      phone: "9876543211",
      status: "Active"
    },
    {
      id: 3,
      name: "Rohan Kulkarni",
      role: "UI/UX Designer",
      department: "Design",
      email: "rohan.kulkarni@company.com",
      phone: "9876543212",
      status: "Active"
    },
    {
      id: 4,
      name: "Sneha Iyer",
      role: "QA Engineer",
      department: "Testing",
      email: "sneha.iyer@company.com",
      phone: "9876543213",
      status: "On Leave"
    },
    {
      id: 5,
      name: "Vikram Joshi",
      role: "Project Manager",
      department: "Management",
      email: "vikram.joshi@company.com",
      phone: "9876543214",
      status: "Active"
    },
    {
      id: 6,
      name: "Kavya Deshmukh",
      role: "HR Executive",
      department: "Human Resource",
      email: "kavya.deshmukh@company.com",
      phone: "9876543215",
      status: "Active"
    }
  ]);


  const handleView = (emp) => {
    alert(
      `Employee Details\n\nName: ${emp.name}\nRole: ${emp.role}\nEmail: ${emp.email}`
    );
  };


  const handleEdit = (emp) => {
    alert(`Edit Employee: ${emp.name}`);
  };


  const handleDelete = (id) => {
    setEmployeeList(
      employeeList.filter(
        (emp) => emp.id !== id
      )
    );
  };


  const filteredEmployees = employeeList.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div className="employee-page">


      <div className="header">

        <div>
          <h1>Employee Management</h1>
          <p>Manage Employee Records Efficiently</p>
        </div>


        <button className="add-btn">
          + Add Employee
        </button>

      </div>



      <div className="search-box">

        <input
          type="text"
          placeholder="Search Employee..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>



      <div className="employee-grid">

        {
          filteredEmployees.map((emp)=>(

            <div className="employee-card" key={emp.id}>


              <div className="avatar">
                {emp.name.charAt(0)}
              </div>


              <h3>{emp.name}</h3>


              <p>
                <b>Role:</b> {emp.role}
              </p>


              <p>
                <b>Department:</b> {emp.department}
              </p>


              <p>
                <b>Email:</b> {emp.email}
              </p>


              <p>
                <b>Phone:</b> {emp.phone}
              </p>


              <p>
                <b>Status:</b>

                <span className={
                  emp.status === "Active"
                  ? "active"
                  : "leave"
                }>
                  {" "}{emp.status}
                </span>

              </p>



              <div className="buttons">

                <button
                  className="view"
                  onClick={()=>handleView(emp)}
                >
                  View
                </button>


                <button
                  className="edit"
                  onClick={()=>handleEdit(emp)}
                >
                  Edit
                </button>


                <button
                  className="delete"
                  onClick={()=>handleDelete(emp.id)}
                >
                  Delete
                </button>

              </div>


            </div>

          ))
        }

      </div>


    </div>

  );
};


export default Employee;