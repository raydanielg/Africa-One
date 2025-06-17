import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Admin Page</h1>
      <p>This is the admin page.</p>
    </div>
  );
};

export default Admin;