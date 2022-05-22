import axios from 'axios';

export const getProducts = async (limitRegs: number)=>{
  const response = await axios({
    method: 'get',
    url: `https://fakestoreapi.com/products?limit=${limitRegs}`,
  })
  return response.data;
}
