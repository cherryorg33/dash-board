import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import profile from './image/a.png';
import email from './image/email.jpg';
import pass from './image/pass.png';

function LoginUi() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const user = { username, password };

    try {
      
      const response = await axios.post('http://127.0.0.1:8000/login', user);

      
      console.log(response.data);

      
      navigate('/home');
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <img src={email} alt="email" className="email" />
                <input
                  type="text"
                  placeholder="Username"
                  className="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="Password"
                  className="name"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-button">
                <button type="submit">Login</button>
              </div>
              <p className="link">
                <a href="/">Forgot password ?</a> Or <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;






