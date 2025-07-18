import { useState, type FC } from 'react';
import { Products } from '@features/Products/Products.tsx';
import { useProductsData } from '@entities/products/queries/queries.ts';
import type { ProductsParams } from '@entities/products/types/types.ts';
// import { useChartWeatherDataQuery } from '@entities/products/queries/queries.ts';
// import { CityLineChart, type CityLineChartProps } from '@features/CityLineChart/ProductsFilter.tsx';
// import { COORDS_BY_CITY } from '@shared/constants/constants.ts';

export const ProductsWidget: FC = () => {
  const [params, _setParams] = useState<ProductsParams>({
    sort: 'price-asc',
    filters: {
      maxPrice: 0,
      inStockOnly: false,
    },
    pagination: {
      page: 0,
      pageSize: 0,
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
        <Products
          products={data ?? []}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </div>
    </div>
  );
};
