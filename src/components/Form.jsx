import React, { useState } from "react";
import Github from "../images/github (1).png";
import Google from "../images/google.png";
import Show from "../images/Icon.png";
import Hide from "../images/hide (1).png";
import Button from "./Button";
const Form = ({ email, password, handleChange, setErr }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const Eye = showPassword ? Hide : Show;

  return (
    <form className="w-full mt-4 sm:mt-4 p-4 sm:p-8 max-w-[600px] rounded-lg border m-auto shadow-lg border-[#E6E7EC]">
      <h2 className="text-[#101828] text-2xl text-center font-medium">
        Welcome back!
      </h2>
      <p className="text-sm sm:text-lg text-[#828282] text-center">
        Sign in to access your account
      </p>
      <label htmlFor="email" className="mt-2 mb-2 block">
        Email:
      </label>
      <input
        required
        className="w-full block outline-none p-2 sm:py-3 focus:shadow-sm rounded-lg border border-[#E6E7EC]"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => handleChange(e)}
        onFocus={() => setErr(false)}
      />
      <label htmlFor="password" className="mt-2 mb-2 block">
        Password:
      </label>
      <div className="rounded-lg mb-3 border p-2 sm:py-3 flex justify-between focus-within:shadow-sm items-center border-[#E6E7EC]">
        <input
          className="inline-block w-[85%] outline-none "
          type={showPassword ? "text" : "password"}
          required
          name="password"
          id="password"
          value={password}
          onFocus={() => setErr(false)}
          onChange={(e) => handleChange(e)}
        />
        <img
          onClick={handlePasswordVisibility}
          src={Eye}
          alt="Show password"
          className="w-8 cursor-pointer"
        />
      </div>
      <a
        href="#"
        className="text-[#32D583] no-underline block mb-4 hover:underline transition"
      >
        Forgot Password ?
      </a>
      <Button bg="bg-[#32D583]" type="big">
        Sign In
      </Button>
      <h3 className="text-center my-3 font-semibold text-base text-[#828282]">
        OR
      </h3>
      <div className="flex justify-center items-center gap-4 mb-4">
        <Button>
          Sign in with Github{" "}
          <span>
            <img className="w-8" src={Github} alt="sign in with Github" />
          </span>
        </Button>
        <Button>
          Sign in with Google{" "}
          <span>
            <img className="w-8" src={Google} alt="sign in with Google" />
          </span>
        </Button>
      </div>
    </form>
  );
};

export default Form;
