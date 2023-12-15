import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
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
            <form className="loginform">
              <div className="mb-3" id="email">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address or phone number"
                />
              </div>
              <div className="mb-3" id="password">
                <input
                  form="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary" id="btn1">
                Login
              </button>
              <a href="#">
                Forgotten Password?
              </a>
              <hr />
              <div className="newaccount">
              <button type="submit" className="btn btn-success" id="btn2">
                Create new account
              </button>
              </div>
            </form>
            <br/>
            <div className="page">
            <a href='#'>Create a Page </a>for a celebrity, brand or business.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
