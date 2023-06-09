import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the email and password
    const data = {
      username: email,
      password: password
    };

    // Make a POST request to the login API
    axios
      .post('http://3.88.1.192:3000/api/login', data)
      .then((response) => {
        // Handle successful login
        const authToken = response.data.authToken;
        const username = response.headers['set-cookie'];
        setError('');
        // Set the authentication token and username in cookies
        Cookies.set('authToken', authToken);
        Cookies.set('username', username);
        // Call onLoginSuccess function with username parameter
        onLoginSuccess(username);
        // Redirect to home page
        navigate('/');
      })
      .catch((error) => {
        // Handle login error
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError('An error occurred. Please try again.');
        }
      });
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;