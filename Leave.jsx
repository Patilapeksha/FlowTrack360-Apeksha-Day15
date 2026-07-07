import React, { useState } from "react";
import "./Leave.css";

function Leave(){

const [leaveData,setLeaveData] = useState([
{
id:"EMP001",
name:"Aarav Sharma",
department:"Development",
type:"Casual Leave",
days:2,
date:"10 Jul - 11 Jul",
status:"Pending"
},
{
id:"EMP002",
name:"Priya Patel",
department:"HR",
type:"Sick Leave",
days:1,
date:"12 Jul",
status:"Approved"
},
{
id:"EMP003",
name:"Rahul Verma",
department:"Finance",
type:"Vacation Leave",
days:4,
date:"15 Jul - 18 Jul",
status:"Pending"
},
{
id:"EMP004",
name:"Neha Singh",
department:"Testing",
type:"Casual Leave",
days:2,
date:"20 Jul - 21 Jul",
status:"Rejected"
},
{
id:"EMP005",
name:"Rohan Mehta",
department:"Support",
type:"Work From Home",
days:1,
date:"22 Jul",
status:"Pending"
},
{
id:"EMP006",
name:"Sneha Joshi",
department:"Design",
type:"Sick Leave",
days:2,
date:"25 Jul - 26 Jul",
status:"Approved"
}
]);


function changeStatus(index,status){

let updated=[...leaveData];

updated[index].status=status;

setLeaveData(updated);

}



function applyLeave(){

let newLeave={
id:"EMP007",
name:"Akash Verma",
department:"Development",
type:"Casual Leave",
days:1,
date:"28 Jul",
status:"Pending"
};

setLeaveData([...leaveData,newLeave]);

}



function exportReport(){

let csv="ID,Name,Department,Leave Type,Days,Status\n";

leaveData.forEach(emp=>{

csv+=`${emp.id},${emp.name},${emp.department},${emp.type},${emp.days},${emp.status}\n`;

});


let blob=new Blob([csv],{type:"text/csv"});

let url=URL.createObjectURL(blob);

let link=document.createElement("a");

link.href=url;

link.download="Leave_Report.csv";

link.click();

}



return(

<div className="leave-page">


<div className="leave-header">

<div>
<h1>Leave Management</h1>
<p>Employee leave request and approval system</p>
</div>


<div>

<button 
className="apply-btn"
onClick={applyLeave}
>
+ Apply Leave
</button>


<button 
className="export-btn"
onClick={exportReport}
>
Export Report
</button>

</div>


</div>




<div className="leave-summary">


<div className="leave-card">
<h3>Total Requests</h3>
<h2>{leaveData.length}</h2>
</div>


<div className="leave-card">
<h3>Pending</h3>
<h2>
{leaveData.filter(e=>e.status==="Pending").length}
</h2>
</div>


<div className="leave-card">
<h3>Approved</h3>
<h2>
{leaveData.filter(e=>e.status==="Approved").length}
</h2>
</div>


<div className="leave-card">
<h3>Rejected</h3>
<h2>
{leaveData.filter(e=>e.status==="Rejected").length}
</h2>
</div>


</div>




<div className="leave-table">


<table>

<thead>

<tr>
<th>ID</th>
<th>Employee</th>
<th>Department</th>
<th>Leave Type</th>
<th>Days</th>
<th>Date</th>
<th>Status</th>
<th>Action</th>
</tr>

</thead>


<tbody>


{
leaveData.map((emp,index)=>(

<tr key={index}>

<td>{emp.id}</td>


<td>

<div className="employee">

<div className="avatar">
{emp.name[0]}
</div>

{emp.name}

</div>

</td>


<td>{emp.department}</td>

<td>{emp.type}</td>

<td>{emp.days}</td>

<td>{emp.date}</td>


<td>

<span className={`status ${emp.status}`}>
{emp.status}
</span>

</td>


<td>

<button
className="approve"
onClick={()=>changeStatus(index,"Approved")}
>
Approve
</button>


<button
className="reject"
onClick={()=>changeStatus(index,"Rejected")}
>
Reject
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

export default Leave;