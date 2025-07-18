import { type FC } from 'react';

type Params = {
  sort: 'price-asc' | 'price-desc' | 'title-asc'
  filters: {
    maxPrice: number
    inStockOnly: boolean
  },
  pagination: {
    page: number
    pageSize: number
  }
};

export type ProductsFilterProps = {
  params: Params;
  setParams: (params: Params) => void;
};

export const ProductsFilter: FC<ProductsFilterProps> = ({ params, setParams }) => {
  console.log(params);
  console.log(setParams);
  return (
    <div className="grid grid-cols-3 gap-2">

    </div>
  );
};
