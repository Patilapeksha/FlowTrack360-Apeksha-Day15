import React, { useState } from "react";
import "./Validation.css";

function Validation(){

const [formData,setFormData]=useState({

name:"",
email:"",
phone:"",
department:"",
designation:"",
password:"",
confirmPassword:""

});


const [errors,setErrors]=useState({});
const [success,setSuccess]=useState("");



function handleChange(e){

setFormData({

...formData,
[e.target.name]:e.target.value

});

}




function validate(){

let error={};


if(!formData.name){
error.name="Employee name is required";
}
else if(!/^[A-Za-z ]+$/.test(formData.name)){
error.name="Only alphabets allowed";
}



if(!formData.email){
error.email="Email is required";
}
else if(
!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
){
error.email="Enter valid email address";
}



if(!formData.phone){
error.phone="Phone number required";
}
else if(!/^[0-9]{10}$/.test(formData.phone)){
error.phone="Enter 10 digit mobile number";
}



if(!formData.department){
error.department="Select department";
}



if(!formData.designation){
error.designation="Enter designation";
}



if(!formData.password){
error.password="Password required";
}
else if(formData.password.length<8){
error.password="Password must contain 8 characters";
}



if(formData.password!==formData.confirmPassword){

error.confirmPassword="Password does not match";

}



setErrors(error);

return Object.keys(error).length===0;

}




function submitForm(e){

e.preventDefault();


if(validate()){

setSuccess("Employee registration completed successfully");


setFormData({

name:"",
email:"",
phone:"",
department:"",
designation:"",
password:"",
confirmPassword:""

});

}

}



return(

<div className="validation-container">


<div className="validation-card">


<h1>Employee Registration</h1>

<p>
Create new employee account
</p>


<form onSubmit={submitForm}>


<div className="input-group">

<label>Employee Name</label>

<input

type="text"

name="name"

placeholder="Enter employee name"

value={formData.name}

onChange={handleChange}

/>

<span>{errors.name}</span>

</div>




<div className="input-group">

<label>Email Address</label>

<input

type="email"

name="email"

placeholder="employee@company.com"

value={formData.email}

onChange={handleChange}

/>

<span>{errors.email}</span>

</div>




<div className="input-group">

<label>Mobile Number</label>

<input

type="text"

name="phone"

placeholder="Enter 10 digit mobile number"

value={formData.phone}

onChange={handleChange}

/>

<span>{errors.phone}</span>

</div>




<div className="input-group">

<label>Department</label>


<select

name="department"

value={formData.department}

onChange={handleChange}

>

<option value="">
Select Department
</option>

<option>
Development
</option>

<option>
Testing
</option>

<option>
HR
</option>

<option>
Finance
</option>


</select>


<span>{errors.department}</span>


</div>





<div className="input-group">

<label>Designation</label>


<input

type="text"

name="designation"

placeholder="Software Engineer"

value={formData.designation}

onChange={handleChange}

/>


<span>{errors.designation}</span>


</div>





<div className="input-group">

<label>Password</label>


<input

type="password"

name="password"

placeholder="Create password"

value={formData.password}

onChange={handleChange}

/>


<span>{errors.password}</span>


</div>





<div className="input-group">

<label>Confirm Password</label>


<input

type="password"

name="confirmPassword"

placeholder="Confirm password"

value={formData.confirmPassword}

onChange={handleChange}

/>


<span>{errors.confirmPassword}</span>


</div>





<button type="submit">
Create Account
</button>


<p className="success">
{success}
</p>



</form>


</div>


</div>

);

}


export default Validation;