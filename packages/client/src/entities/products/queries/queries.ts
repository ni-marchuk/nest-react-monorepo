import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@entities/products/services/services.ts';
import type { ProductsParams, ProductsResultQuery } from '@entities/products/types/types.ts';
import { processProducts } from '@entities/products/helpers.ts';


export const useProductsData = (queryParams: ProductsParams) => {
  return useQuery({
    queryKey: ['getProducts', queryParams],
    queryFn: async (): Promise<ProductsResultQuery> => {
      const res = await getProducts(queryParams);
      return processProducts(res, queryParams);
    },
    retry: 1,
  });
};
