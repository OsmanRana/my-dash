import React from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import RegisterImage from "./RegisterImage/RegisterImage";
import "./registerPage.css";

const RegisterPage = () => {
  return (
    <div className="container">
      <RegisterImage />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
