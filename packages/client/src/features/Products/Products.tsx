import { type FC } from 'react';
import type { Product } from '@entities/products/types/types';
import { ProductsSkeleton } from '@features/Products/ProductsSkeleton.tsx';
import { Typography } from '@shared/ui/Typography/Typography.tsx';
import { ProductsError } from '@features/Products/ProductsError.tsx';

export type ProductsProps = {
  products: Array<Product>,
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
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
                <Typography>Price: {i.price}</Typography>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
