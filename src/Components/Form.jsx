import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Input from "./Input";

export default function Form({ hide }) {
  const [register, setRegister] = useState(true);

  function toggleRegister() {
    setRegister(!register);
  }
  return (
    <form
      className="flex mt-10 font-form text-slate-100 flex-col
     items-center backdrop-blur-lg w-[380px] h-[420px] py-4
      gap-6 border-[1px] border-slate-100 relative"
    >
      <h2 className="text-4xl font-bold text-indigo-950">Login</h2>

      {register ? null : <Input name="username" />}
      <Input name="email" />
      <Input name="password" />

      <div className="flex gap-12">
        <label htmlFor="remember">
          <input type="checkBox" id="remember" className="mr-1" />
          {register ? "Remember me" : "I agree to the terms & conditions"}
        </label>

        {register && (
          <a href="#" className="text-indigo-950 italic">
            Forgot Password?
          </a>
        )}
      </div>
      <button
        className="py-2  border-[1px] text-slate-100
       rounded-md w-4/5 duration-500 hover:bg-indigo-950"
      >
        Login
      </button>
      <p>
        {register ? "Don't have an account?" : "Already have an account?"}
        <a href="#" onClick={toggleRegister} className="text-indigo-950 ml-1">
          {register ? "Register" : "Login"}
        </a>
      </p>
      <CloseIcon
        className="absolute top-0 right-0
       bg-indigo-950 cursor-pointer"
        onClick={hide}
      />
    </form>
  );
}
