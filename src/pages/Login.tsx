import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with actual authentication logic
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      localStorage.setItem('loggedIn', 'true');
      setRedirecting(true);
      setTimeout(() => {
        navigate('/admin');
      }, 2000);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-blue-500">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <img src="/assets/bongo_radio_hub_logo.jpeg" alt="Logo" className="h-20 mx-auto mb-4" />
        <h1 className="block text-gray-700 text-center text-2xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </Button>
            <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</Link>
            <span className="mx-2 text-gray-400">|</span>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-800">Terms of Service</Link>
            <span className="mx-2 text-gray-400">|</span>
            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-800">About</Link>
          </div>
          <div className="mt-4 text-center">
            Sample Login: admin@example.com / password
          </div>
        </form>
        {redirecting && <p className="text-center mt-4">Redirecting to dashboard...</p>}
      </div>
    </div>
  );
};

export default Login;