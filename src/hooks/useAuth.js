import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser, signupUser } from '../services/auth';

const useAuth = () => {
  const { setUser, setIsAuthenticated } = useContext(AuthContext);
  const [error, setError] = useState(null);
  
  const login = async (credentials) => {
    try {
      const user = await loginUser(credentials);
      setUser(user);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const signup = async (userData) => {
    try {
      const user = await signupUser(userData);
      setUser(user);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return { login, signup, logout, error };
};

export default useAuth;