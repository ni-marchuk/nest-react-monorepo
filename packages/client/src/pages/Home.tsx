import { type FC } from 'react';
import { clsx } from 'clsx';
import { ProductsWidget } from '@widgets/ProductsWidget.tsx';
import { Typography } from '@shared/ui/Typography/Typography.tsx';

export const HomePage: FC = () => {
  return (
    <>
      <div
        className={clsx('w-full mx-auto px-4 pb-10 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl')}>
        <Typography as="h1" variant="h1" className="my-8 text-neutral-700">Products</Typography>
        <ProductsWidget />
      </div>
    </>
  );
};
