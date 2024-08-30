// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice';
import Modal from './Modal';
import ojito from '../assets/ojito.png';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'mod7reactusip') {
      dispatch(login({ username, email, password }));
    } else {
      setShowErrorModal(true);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowLogoutModal(false);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <img
            src="/path/to/ojito.png"
            alt="Show Password"
            onClick={handleShowPassword}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {isLoggedIn && (
        <span
          onClick={() => setShowLogoutModal(true)}
          style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Logout
        </span>
      )}
      {showLogoutModal && (
        <Modal>
          <p>¿Estás seguro que quieres cerrar sesión?</p>
          <button onClick={handleLogout}>Presionar para salir</button>
          <button onClick={() => setShowLogoutModal(false)}>X</button>
        </Modal>
      )}
      {showErrorModal && (
        <Modal>
          <p>Password incorrecto</p>
          <button onClick={() => setShowErrorModal(false)}>X</button>
        </Modal>
      )}
    </div>
  );
};

export default LoginForm;
