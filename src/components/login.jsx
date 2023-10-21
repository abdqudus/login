import React, { useState } from "react";
import Form from "./Form";
import SignUp from "./SignUp";
const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [err, setErr] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const handleChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  return (
    <div className="relative p-4 py-8">
      <Form
        email={userDetails.email}
        password={userDetails.password}
        handleChange={handleChange}
        setErr={setErr}
        err={err}
        isSigningIn={isSigningIn}
        setIsSigningIn={setIsSigningIn}
      />
      <SignUp />
    </div>
  );
};

export default Login;
