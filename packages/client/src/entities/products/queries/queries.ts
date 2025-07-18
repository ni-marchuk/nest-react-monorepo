import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@entities/products/services/services.ts';
import type { Product, ProductsParams } from '@entities/products/types/types.ts';

export const useProductsData = (queryParams: ProductsParams) => {
  return useQuery({
    queryKey: ['getProducts', queryParams],
    queryFn: async (): Promise<Array<Product>> => {
      return await getProducts(queryParams);
    },
    retry: 1,
  });
};
