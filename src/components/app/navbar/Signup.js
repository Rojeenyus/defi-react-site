import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const Signup = ({ setSignIn, signIn, modal, setModal, setId, setEmail }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  let data = {};
  const url = "https://ancient-beyond-96499.herokuapp.com/users";

  let handleSignIn = () => setSignIn(!signIn);
  let handleModal = () => setModal(!modal);

  function register(email, password, passwordConfirmation) {
    data = {
      user: {
        email: email,
        password: password,
        confirm_password: passwordConfirmation,
      },
    };
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    register(emailAddress, password, repeatPassword);
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      setId(response.data.user.id);
      setEmail(response.data.user.email);
      sessionStorage.setItem("id", response.data.user.id);
      sessionStorage.setItem("email", response.data.user.email);
      sessionStorage.setItem("money", response.data.user.money);
      handleModal();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="modal">
      <div id="main-con" className="modal-content">
        <span className="close" onClick={handleModal}>
          &times;
        </span>
        <h1>Web 2 sign up</h1>
        <form className="forms" onSubmit={handleSubmit}>
          <div className="subform">
            <label>Email address</label>
            <input
              type="text"
              className="input"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            ></input>
            {/* <div className="error">{emailError}</div> */}
          </div>
          <div className="subform">
            <label>Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {/* <div className="error">{passwordError}</div> */}
          </div>
          <div className="subform">
            <label>Repeat Password</label>
            <input
              type="password"
              className="input"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            ></input>
            {/* <div className="error">{repPasswordError}</div> */}
          </div>
          <input type="submit" id="submit" value="Register"></input>
        </form>
        <p>
          Already registered?{" "}
          <a onClick={handleSignIn} className="pointer">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
