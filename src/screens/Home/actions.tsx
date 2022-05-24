import axios from 'axios';

export const getProducts = async ()=>{
  const response = await axios({
    method: 'get',
    url: `https://fakestoreapi.com/products`,
  })
  return response.data;
}
