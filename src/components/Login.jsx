import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useCustomHistory from "../hooks/useCustomHistory";
import { Link } from 'react-router-dom';


const Login = () => {
  const history = useCustomHistory();
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  // Handle form submission logic
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    // For example, you can check the credentials and redirect to the feed page
    if (email === "user@example.com" && password === "password") {
      // Redirect to the feed page on successful login
      history.push("/feed");
    } else {
      // Handle login failure (show error message, etc.)
      console.log("Login failed");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              <div className="logo-img">
                <img src="imgs/fbname.png" className="fblogo" alt="mainlogo" />
              </div>
              <div className="wordings">
                <h2 className="logo-wordings">
                  Facebook helps you connect and share with the people in your
                  life.
                </h2>
              </div>
            </div>
          </div>
          <div className="col-6" id="form">
            <div className="form">
              <form className="loginform" onSubmit={(e) => handleLogin(e)}>
                <div className="mb-3" id="email">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email address or phone number"
                    value={email} // Bind the email state
                    onChange={(e) => setEmail(e.target.value)} // Update the email state on change
                  />
                </div>
                <div className="mb-3" id="password">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password} // Bind the password state
                    onChange={(e) => setPassword(e.target.value)} // Update the password state on change
                  />
                </div>
                <button type="submit" className="btn btn-primary" id="btn1">
                  Login
                </button>
                <a href="#">Forgotten Password?</a>
                <hr />
                <div className="newaccount">
                  {/* Use Link to handle navigation without a page reload */}
                  <Link to="/signup" className="btn btn-success" id="btn2">
                    Create new account
                  </Link>
                </div>
              </form>
              <br />
              <div className="page">
                <Link to="/Page">Create a Page </Link>for a celebrity, brand, or
                business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
