"use client";
import connectMongoDB from "../../libs/mongodb";

import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	connectMongoDB()
  const handleSubmit = (e) => {
    e.preventDefault();
		console.log(email, password);
  };

  return (
    <div className="bg-white absolute text-[30px] text-black w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <h2 className="font-extrabold text-[60px] mt-[-10%]">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-slate-700 rounded-lg p-7 gap-4 flex flex-col mt-9"
      >
        <div className="flex flex-col">
          <label className="text-[40px]">Email:</label>
          <input
            type="email"
            value={email}
            className="m-auto bg-slate-200 text-[20px] p-2"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[40px]">Password:</label>
          <input
            type="password"
            value={password}
            className=" bg-slate-200 text-[20px] p-2"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit} type="submit" className="bg-green-300 rounded-lg p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
