import axios from 'axios';

export const getProduct = async (productId : string)=>{
  const response = await axios({
    method: 'get',
    url: `https://fakestoreapi.com/products/${productId}`,
  })
  return response.data;
}
