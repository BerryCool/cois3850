import React from "react";
import { Link } from "wouter";

const Signin = () => {
  return <div className="flex justify-center items-center min-h-screen bg-[rgb( / var(--tw-bg-opacity))]" >
    <div className="w-1/4">
      <h1 className="text-xl text-center font-bold mb-10">Sign in to your account</h1>
      <form className="flex flex-col gap-5 text-sm font-semibold">

        <div className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input type="text"
        className="border p-2 mb-5 rounded-lg h-fit focus:border-indigo-500 focus:outline-1 focus:outline-green-500"/>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
          <label htmlFor="password">Password</label> <Link href="/forgot-password" className="text-xs text-indigo-400">Forgot Password?</Link>
          </div>
        
        <input type="password" className="border p-2 mb-5 rounded-lg h-fit"/>
        </div>



        <button className="border p-2 border-none bg-indigo-500 rounded-lg">Signin</button>
      </form>
    </div>
    
  </div>
};

export default Signin;
