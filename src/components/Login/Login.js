import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      username: username,
      password: password
    };
  
    // Make a POST request to the login API
    axios
      .post('http://3.88.1.192:3000/api/login', data)
      .then((response) => {
        // Handle successful login
        const authToken = response.data.authToken;
        const username = response.data.user; // Get the username from the response data
  
        setError('');
        console.log('response : ', username)
        // Call onLoginSuccess function with username parameter
        onLoginSuccess(username);
  
        // Set the authentication token and username in cookies
        Cookies.set('authToken', authToken, { expires: 7 }); // Expires in 7 days
        Cookies.set('username', username, { expires: 7 }); // Expires in 7 days
  
        // Redirect to home page
        navigate('/');
        console.log('username:', {username});
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
          <input type="text" value={username} onChange={handleUserChange} />
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