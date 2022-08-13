import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import Cookies from "universal-cookie";

const Login = ({
  setSignIn,
  signIn,
  modal,
  setModal,
  setId,
  setEmail,
  email,
}) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");
  let data = {};
  let authkey = {};
  const url = "https://ancient-beyond-96499.herokuapp.com/users/sign_in";
  const urlauth = "https://ancient-beyond-96499.herokuapp.com/user_token";
  const cookies = new Cookies();

  let handleSignIn = () => setSignIn(!signIn);
  let handleModal = () => setModal(!modal);

  function login(email, password) {
    data = {
      user: {
        email: email,
        password: password,
      },
    };
    authkey = {
      auth: {
        email: email,
        password: password,
      },
    };
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    login(emailAddress, password);
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      console.log(response.data.user);
      setId(response.data.user.id);
      setEmail(response.data.email);
      sessionStorage.setItem("id", response.data.user.id);
      sessionStorage.setItem("email", response.data.user.email);
      sessionStorage.setItem("money", response.data.user.money);
      handleModal();
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(async () => {
    login(emailAddress, password);
    try {
      const response = await axios.post(urlauth, authkey, {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      setAuth(response.data.jwt);
      cookies.set("auth", response.data.jwt);
    } catch (error) {
      console.log(error.response);
    }
  }, [email]);

  return (
    <div className="modal">
      <div id="main-con" className="modal-content">
        <h1>
          Web 2 sign in
          <span className="close" onClick={handleModal}>
            &times;
          </span>
        </h1>
        <form className="forms" onSubmit={handleSubmit}>
          <div className="subform">
            <label>Email address</label>
            <input
              type="text"
              className="input"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            ></input>
            <div className="error"></div>
          </div>
          <div className="subform">
            <label>Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {/* <div className="error">{Error}</div> */}
          </div>
          <input type="submit" id="submit" value="Sign In"></input>
        </form>
        <p>
          Not yet registered?{" "}
          <a onClick={handleSignIn} className="pointer">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
