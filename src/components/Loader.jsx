// Loader.js
import React from 'react';
import { Spinner } from 'react-spinners';

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner size={50} color="#4CAF50" />
    </div>
  );
};

export default Loader;