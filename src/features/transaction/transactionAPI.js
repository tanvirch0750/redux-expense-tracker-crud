import axios from '../../utils/axios';

export const getTransactions = async () => {
  const response = await axios.get('/transactions');
  return response.data;
};

export const addTransactions = async (data) => {
  const response = await axios.post('/transactions', data);
  return response.data;
};

export const editTransactions = async (id, data) => {
  const response = await axios.get(`/transactions/${id}`, data);
  return response.data;
};

export const deleteTransactions = async (id) => {
  const response = await axios.get(`/transactions/${id}`);
  return response.data;
};
