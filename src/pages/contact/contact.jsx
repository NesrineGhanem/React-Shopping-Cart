import React, { useState } from "react";
import './contact.css';

export const Contact = () => {
    const [values,setValues] = useState({
        firstName:"",
        lastName:"",
        email:""
    })
    const [submitted,setSubmited]=useState('')
    const handleFirstName = (e)=>{
     setValues({...values,firstName:e.target.firstName})
    }
    const handleLastName = (e)=>{
        setValues({...values,lastNameName:e.target.lastName})
    }
    const handleEmail = (e)=>{
        setValues({...values,email:e.target.email})
    }   
  return <div className="form">
    <form className="register" onSubmit={submitted}>
        <input id="first-name"
        className="form-field"
        type="text"
        placeholder="first name" 
        value={values.firstName}
        onChange={handleFirstName}/>

        <br></br>
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastName}
        />
        <br></br>
        <input id="email" 
        className="form-field" 
        type="email"placeholder="email"
        value={values.email}
        onChange={handleEmail}/>
        <br></br>
        <button className="btn-field" type="submit">Register</button>
    </form>
  </div>;
};