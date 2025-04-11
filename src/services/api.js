import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your actual API URL

export const fetchProperties = async () => {
  try {
    const response = await axios.get(`${API_URL}/properties`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching properties');
  }
};

export const fetchPropertyById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/properties/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching property details');
  }
};

export const createProperty = async (propertyData) => {
  try {
    const response = await axios.post(`${API_URL}/properties`, propertyData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating property');
  }
};

export const updateProperty = async (id, propertyData) => {
  try {
    const response = await axios.put(`${API_URL}/properties/${id}`, propertyData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating property');
  }
};

export const deleteProperty = async (id) => {
  try {
    await axios.delete(`${API_URL}/properties/${id}`);
  } catch (error) {
    throw new Error('Error deleting property');
  }
};