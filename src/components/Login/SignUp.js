import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match');
      return;
    }

    // Create an object with the form data
    const data = {
      user_name: name,
      user_email: email,
      user_pw: password,
      user_id: username,
      phone_number: phoneNumber
    };

    // Make a POST request to the signup API
    axios
      .post('http://3.88.1.192:3000/api/signup', data)
      .then((response) => {
        // Handle successful signup
        console.log(response.data);
        setError('');
        // Perform any necessary actions (e.g., navigate to dashboard)
        navigate('/');
      })
      .catch((error) => {
        // Handle signup error
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError('An error occurred. Please try again.');
        }
      });
  };

  return (
    <div className="signup-container">
      <h1>회원 가입</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>이름:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>전화 번호:</label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div className="form-group">
          <label>닉네임:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>비밀번호:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <label>비밀번호 확인:</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Signup;