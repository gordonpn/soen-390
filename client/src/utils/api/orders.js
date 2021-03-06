import { makeGetRequest, makePostRequest } from './base.js';

const getOrders = async () => {
  return makeGetRequest('orders');
};

const getMaterialList = async () => {
  return makeGetRequest('orders/materialList');
};

const postOrders = async (body) => {
  return makePostRequest('orders', body);
};

export { getOrders, getMaterialList, postOrders };
