import {mock, mockAxios} from '../mocks'
import data from '../mocks/products/products.json'
mock.onGet("/products").reply(200, {
    product: data,
  });
  
  export  const productApi = mockAxios.get("/products")