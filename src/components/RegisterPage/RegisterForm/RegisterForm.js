import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <h3>Create an account</h3>
      <form>
        <label>Your email address</label>
        <br />
        <input />
        <br />
        <label>Your password</label>
        <br />
        <input />
        <br />
        <label>Confirm your password</label>
        <br />
        <input />
        <br />
        <label>Your full name</label>
        <br />
        <input />
        <br />
        <label>Your phone number</label>
        <br />
        <input />
        <br />

        <input type="checkbox" />
        <label>I read and agree Terms and Conditions</label>
      </form>
    </div>
  );
};

export default RegisterForm;
