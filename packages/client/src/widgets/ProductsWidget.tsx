import { useState, type FC } from 'react';
import type { ProductsParams } from '@entities/products/types/types.ts';
import { ProductsFilter } from '@features/ProductsFilter/ProductsFilter.tsx';
import { useProductsData } from '@entities/products/queries/queries.ts';
import { Products } from '@features/Products/Products.tsx';
// import { useChartWeatherDataQuery } from '@entities/products/queries/queries.ts';
// import { CityLineChart, type CityLineChartProps } from '@features/CityLineChart/ProductsFilter.tsx';
// import { COORDS_BY_CITY } from '@shared/constants/constants.ts';

export const ProductsWidget: FC = () => {
  const [params, setParams] = useState<ProductsParams>({
    sort: 'price-asc',
    filters: {
      categories: ['all'],
      maxPrice: 0,
      inStockOnly: false,
    },
    pagination: {
      page: 1,
      pageSize: 5,
    },
  });

  const {
    data,
    isLoading,
    isError,
    error,
  } = useProductsData({
    ...params,
  });

  return (
    <div className="flex flex-col items-start w-full gap-4 lg:flex-row">
      <div className="w-full">
        <div className="flex gap-2 mb-2">
          <ProductsFilter params={params} setParams={setParams} />
        </div>
        <Products
          products={data?.products ?? []}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </div>
    </div>
  );
};
