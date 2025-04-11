import React, { useState } from 'react';
import AuthForm from '../components/auth/AuthForm';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="Signup">
      <h2>Sign Up</h2>
      <AuthForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitButtonText="Sign Up"
      />
    </div>
  );
}

export default Signup;