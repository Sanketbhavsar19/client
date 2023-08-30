import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/Upload`, data);
    return response.data;
  } catch (error) {
    console.error('Error while calling the API', error.message);
  }
}