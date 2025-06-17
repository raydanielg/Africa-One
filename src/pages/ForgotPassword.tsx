import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual forgot password logic
    alert(`Forgot password requested for ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="block text-gray-700 text-center text-xl font-bold mb-4">Forgot Password</h1>
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
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset Password
            </Button>
            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Back to Login
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</Link>
            <span className="mx-2 text-gray-400">|</span>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-800">Terms of Service</Link>
            <span className="mx-2 text-gray-400">|</span>
            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-800">About</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;