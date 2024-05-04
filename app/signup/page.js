"use client";
import connectMongoDB from "../../libs/mongodb";
import React, { useState } from "react";

const Signup = ({ onLogin }) => {
  const [logins, setLogins] = useState({
    email: "",
    password: "",
    role: "",
    name: "",
    phone: "",
    govtid: "",
    dob: "",
  });

  /* connectMongoDB(); */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logins.email, logins.password, logins.role);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogins((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="bg-white absolute text-[20px] text-black w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <h2 className="font-extrabold text-[60px]">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-slate-700 rounded-lg gap-4 flex flex-col p-8 m-4"
      >
        <div className="flex flex-col">
          <label className="text-[20px]">Name:</label>
          <input
            type="text"
            name="name"
            value={logins.name}
            className="m-auto bg-slate-200 text-[15px] p-2"
            onChange={handleChange} // Use handleChange function to update the state
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[20px]">phone:</label>
          <input
            type="number"
            name="phone"
            value={logins.phone}
            className="m-auto bg-slate-200 text-[15px] p-2"
            onChange={handleChange} // Use handleChange function to update the state
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[20px]">email:</label>
          <input
            type="email"
            name="email"
            value={logins.email}
            className="m-auto bg-slate-200 text-[15px] p-2"
            onChange={handleChange} // Use handleChange function to update the state
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[20px]">DOB:</label>
          <input
            type="date"
            name="DOB"
            value={logins.dob}
            className="m-auto bg-slate-200 text-[15px] p-2"
            onChange={handleChange} // Use handleChange function to update the state
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[20px]">Govt_id</label>
          <input
            type="text"
            name="govt_id"
            value={logins.govtid}
            className="m-auto bg-slate-200 text-[15px] p-2"
            onChange={handleChange} // Use handleChange function to update the state
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[20px]">Role:</label>
          <select
            name="role"
            value={logins.role}
            onChange={handleChange} // Use handleChange function to update the state
            className="m-auto bg-slate-200 text-[15px] p-2"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="worker">Worker</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-black text-white text-[30px] p-2 mt-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
