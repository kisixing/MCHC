import request from '@/utils/request';

export const getProducts = async () => {
  return await request.get('/products');
};
export const getDictionaries = async () => {
  return await request.get('/dictionaries');
};
