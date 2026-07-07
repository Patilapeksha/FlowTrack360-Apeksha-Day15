import React, { useState } from "react";
import "./Attendance.css";

function Attendance() {

const [data,setData] = useState([
{
id:"EMP001",
name:"Apeksha",
dept:"Development",
status:"Present",
checkIn:"09:05 AM"
},
{
id:"EMP002",
name:"Priya Patel",
dept:"HR",
status:"Late",
checkIn:"09:40 AM"
},
{
id:"EMP003",
name:"Rahul Verma",
dept:"Finance",
status:"Absent",
checkIn:"-"
},
{
id:"EMP004",
name:"Neha Singh",
dept:"Testing",
status:"Present",
checkIn:"09:00 AM"
},
{
id:"EMP005",
name:"Rohan Mehta",
dept:"Support",
status:"Absent",
checkIn:"-"
},
{
id:"EMP006",
name:"Sneha Joshi",
dept:"Design",
status:"Present",
checkIn:"09:10 AM"
}
]);


function changeStatus(id,status){

const updated=data.map(emp=>{

if(emp.id===id){

return {
...emp,
status:status,
checkIn:status==="Present"?"09:00 AM":"-"
};

}

return emp;

});

setData(updated);

}



function exportReport(){

let report="ID,Name,Department,Status\n";

data.forEach(emp=>{

report += `${emp.id},${emp.name},${emp.dept},${emp.status}\n`;

});


const blob=new Blob([report],{type:"text/csv"});

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download="Attendance_Report.csv";

a.click();

}



return(

<div className="attendance-page">


<div className="attendance-header">

<div>
<h1>Attendance Management</h1>
<p>Employee Attendance Tracking</p>
</div>

<button onClick={exportReport}>
Export Report
</button>

</div>



<div className="summary-section">

<div className="summary-card">
<h3>Total Employees</h3>
<h2>{data.length}</h2>
</div>

<div className="summary-card">
<h3>Present</h3>
<h2>{data.filter(e=>e.status==="Present").length}</h2>
</div>

<div className="summary-card">
<h3>Absent</h3>
<h2>{data.filter(e=>e.status==="Absent").length}</h2>
</div>

<div className="summary-card">
<h3>Late</h3>
<h2>{data.filter(e=>e.status==="Late").length}</h2>
</div>

</div>



<div className="attendance-table-box">


<table>

<thead>
<tr>
<th>ID</th>
<th>Employee</th>
<th>Department</th>
<th>Check In</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>


<tbody>

{
data.map(emp=>(

<tr key={emp.id}>

<td>{emp.id}</td>

<td>
<div className="employee-name">

<div className="avatar">
{emp.name[0]}
</div>

{emp.name}

</div>
</td>


<td>{emp.dept}</td>

<td>{emp.checkIn}</td>


<td>
<span className={`status ${emp.status}`}>
{emp.status}
</span>
</td>


<td>

<button 
className="present-btn"
onClick={()=>changeStatus(emp.id,"Present")}
>
Present
</button>


<button 
className="absent-btn"
onClick={()=>changeStatus(emp.id,"Absent")}
>
Absent
</button>

</td>


</tr>

))
}

</tbody>

</table>


</div>


</div>

);

}

export default Attendance;