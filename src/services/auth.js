import axios from 'axios';

const API_URL = 'http://your-api-url.com/api/auth/';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = () => {
  // Implement logout functionality, e.g., clearing tokens
};