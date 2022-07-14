import api from './api';

export const loadPhones = () => {
  return api.get('/phones').then((response) => response.data);
};

export const loadSinglePhone = (id) => {
  return api.get(`/phones/${id}`).then((response) => response.data);
};
