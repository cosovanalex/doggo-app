import axios from 'axios';

const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const login = async (name, email) => {
  await api.post('/auth/login', { name, email });
};

export const logout = async () => {
  await api.post('/auth/logout');
};

export const fetchBreeds = async () => {
  const response = await api.get('/dogs/breeds');
  return response.data;
};

export const searchDogs = async (filters) => {
  const response = await api.get('/dogs/search', {
    params: {
      ...filters,
      sort: filters.sort ? filters.sort : null,
    },
  });
  return response.data;
};

export const fetchDogsById = async (ids) => {
  const response = await api.post('/dogs', ids);
  return response.data;
};

export const fetchLocationByZipCode = async (zipCode) => {
  const response = await api.get(`/locations/${zipCode}`);
  return response.data;
};

export const generateMatch = async (dogIds) => {
  const response = await api.post('/dogs/match', dogIds);
  return response.data;
};
