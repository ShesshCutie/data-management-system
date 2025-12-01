import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      {/* Left side image */}
      <div className="login-image">
        <div className="login-text">
          <h2>BFAR-PFO Data System</h2>
          <p>Empowering sustainable fisheries through data-driven insights.</p>
        </div>
      </div>

      {/* Right side form */}
      <div className="login-form-container">
        <div className="form-box">
          <h3>Welcome Back!</h3>
          <p className="subtitle">Please log in to your account</p>

          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-login">
              Login
            </button>

            <p className="back-home">
              <Link to="/">← Back to Home</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
