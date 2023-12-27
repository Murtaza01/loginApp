import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";

export default function Input({ name }) {
  return (
    <div className=" relative">
      <input
        type={name}
        id={name}
        autoComplete="off"
        className="input w-72 peer"
      />
      <label
        className="absolute bottom-2 left-0 cursor-text
     font-semibold peer-focus:translate-y-[-80%]
      transition-transform duration-300 capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      {name === "email" ? (
        <EmailIcon className="absolute right-1 bottom-2 text-indigo-950" />
      ) : name === "password" ? (
        <KeyIcon className="absolute right-1 bottom-2 text-indigo-950" />
      ) : name === "username" ? (
        <PersonIcon className="absolute right-1 bottom-2 text-indigo-950" />
      ) : null}
    </div>
  );
}
