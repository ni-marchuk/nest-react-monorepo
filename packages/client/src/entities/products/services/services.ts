import type { Product, ProductsParams } from '@entities/products/types/types.ts';

export const getProducts = async (params: ProductsParams): Promise<Array<Product>> => {
  console.log(params);
  const res = await  fetch('http://localhost:8000/products')
  return await res.json()
};
