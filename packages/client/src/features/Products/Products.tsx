import { type FC } from 'react';
import { Typography } from '@shared/ui/Typography/Typography.tsx';
import { ProductsError } from '@features/Products/ProductsError.tsx';
import { ProductsSkeleton } from '@features/Products/ProductsSkeleton.tsx';

type Product = {
  id: number
  title: string
  price: number
  inStock: boolean
  category: string
}

// type Params = {
//   sort: 'price-asc' | 'price-desc' | 'title-asc'
//   filters: {
//     maxPrice: number
//     inStockOnly: boolean
//   },
//   pagination: {
//     page: number
//     pageSize: number
//   }
// };

export type ProductsProps = {
  products: Array<Product>,
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  // params: Params;
  // setParams: (params: Params) => void;
};

export const Products: FC<ProductsProps> = ({ products, isLoading, isError, error }) => {
  if (isLoading) {
    return <ProductsSkeleton />;
  }

  if (isError) {
    console.error(error?.message);
    return <ProductsError />;
  }

  if (products?.length) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {products.map(i => {
          return (
            <div className="size-full p-4 border-2 border-solid border-slate-600 rounded-xl">
              <div className=" flex flex-col" key={i.id}>
                <Typography variant="h3" as="h3" className='mb-2'>Name: {i.title}</Typography>
                <Typography>Category: {i.category}</Typography>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
