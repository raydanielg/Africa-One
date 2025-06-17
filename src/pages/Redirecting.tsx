import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirecting = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      window.location.href = "https://github.com/raydanielg/Bongo-Radio-Hub";
    }
  }, [count, navigate]);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Redirecting in {count}...</h1>
      <p className="text-lg text-white/80">You will be redirected to the source code in {count} seconds.</p>
    </div>
  );
};

export default Redirecting;