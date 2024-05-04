"use client"
import connectMongoDB from "../../libs/mongodb";
import React, { useState } from "react";

const Signup = ({ onLogin }) => {
  const [logins, setLogins] = useState({
    email: "",
    password: "",
    role: "", // Initialize role state
  });

  connectMongoDB();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logins.email, logins.password, logins.role); // Access email, password, and role from logins state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogins((prevState) => ({ ...prevState, [name]: value })); // Update the state based on input name
  };

  return (
    <div className="bg-white absolute text-[30px] text-black w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <h2 className="font-extrabold text-[60px] mt-[-10%]">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-slate-700 rounded-lg p-7 gap-4 flex flex-col mt-9"
      >
        <div className="flex flex-col">
          <label className="text-[40px]">Email:</label>
          <input
            type="email"
            name="email"
            value={logins.email}
            className="m-auto bg-slate-200 text-[20px] p-2"
            onChange={handleChange} // Use handleChange function to update the state
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[40px]">Password:</label>
          <input
            type="password"
            name="password"
            value={logins.password}
            className="m-auto bg-slate-200 text-[20px] p-2"
            onChange={handleChange} // Use handleChange function to update the state
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[40px]">Role:</label>
          <select
            name="role"
            value={logins.role}
            onChange={handleChange} // Use handleChange function to update the state
            className="m-auto bg-slate-200 text-[20px] p-2"
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
