// src/components/HomePage.js
import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { username } = useSelector((state) => state.auth);

  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Forms</li>
        </ul>
      </nav>
      <h1>Bienvenido, {username}</h1>
      <img src="/path/to/ojito.png" alt="ojito" />
    </div>
  );
};

export default HomePage;
