import React, { useState } from 'react';
import axios from 'axios';
// import swal from 'sweetalert';
import './loginsignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      swal("Error!", "Invalid email address", "error");
      return;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      swal("Error!", "Password must be at least 6 characters long", "error");
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await axios.post('http://localhost:9700/api/login', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      swal("Error!", "Invalid email address", "error");
      return;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      swal("Error!", "Password must be at least 6 characters long", "error");
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await axios.post('http://localhost:9700/api/users', { email, password });
      console.log(response.data);
      swal("Success!", "User created successfully!", "success");
    } catch (error) {
      console.error('Signup failed:', error);
      swal("Error!", "Failed to create user.", "error");
    }
  };

  return (
    <div className="LoginSignup">
      {isLogin ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            {emailError && <div className="error">{emailError}</div>}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password" required />
            {passwordError && <div className="error">{passwordError}</div>}
            <button type="submit">Log In</button>
          </form>
          <p>
            Already have an account?{' '}
            <button type="button1" onClick={handleFormSwitch}>
              Sign Up
            </button>
            <br />
            <br />
            <br />
            {/* Adding images to buttons */}
            <button type="button"><img src="/google.png" alt="Google" className="icon" />Continue with Google</button><br />
            <button type="button"><img src="/facebook.png" alt="Facebook" className="icon" />Continue with Facebook</button><br />
            <button type="button"><img src="/apple.png" alt="Apple" className="icon" />Continue with Apple</button><br />
          </p>
        </div>
      ) : (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            {emailError && <div className="error">{emailError}</div>}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password" required />
            {passwordError && <div className="error">{passwordError}</div>}
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <button type="button2" onClick={handleFormSwitch}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
