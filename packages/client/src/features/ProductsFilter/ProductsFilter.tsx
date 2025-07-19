import { type FC } from 'react';
import type { ProductsCategory, ProductsParams } from '@entities/products/types/types.ts';
import { Button } from '@shared/ui/Button/Button.tsx';
import { Typography } from '@shared/ui/Typography/Typography.tsx';

export type ProductsFilterProps = {
  params: ProductsParams;
  setParams: (params: ProductsParams) => void;
};

export const ProductsFilter: FC<ProductsFilterProps> = ({ params, setParams }) => {
  const handleChangeSort = (sort: ProductsParams['sort']) => {
    const newParams = { ...params };
    newParams['sort'] = sort;
    setParams(newParams);
  };

  const handleChangeCategory = (category: ProductsCategory) => {
    let categories = params.filters.categories;
    const newParams = { ...params };

    if (category === 'all') {
      newParams.filters.categories = ['all'];
    } else {
      if (categories.includes('all')) {
        categories = categories.filter((i) => i !== 'all');
      }

      const categoriesSet = new Set<ProductsCategory>([...categories]);

      if (!categoriesSet.has(category)) {
        categoriesSet.add(category);
      } else {
        categoriesSet.delete(category);
      }

      newParams.filters.categories = [];
      categoriesSet.forEach(c => {
        newParams.filters.categories.push(c);
      });
    }
    setParams(newParams);
  };

  const isActiveCategory = (category: ProductsCategory) => {
    console.log(params.filters.categories.includes(category));
    return params.filters.categories.includes(category);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-2">
        <Typography as="h3" variant="h3">Сортировка</Typography>
        <Button onClick={() => handleChangeSort('price-asc')}>
          price-asc
        </Button>
        <Button onClick={() => handleChangeSort('price-desc')}>
          price-desc
        </Button>
        <Button onClick={() => handleChangeSort('title-asc')}>
          title-asc
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Typography as="h3" variant="h3">Категории</Typography>
        <Button onClick={() => handleChangeCategory('all')} isActive={isActiveCategory('all')}>
          all
        </Button>
        <Button onClick={() => handleChangeCategory('books')} isActive={isActiveCategory('books')}>
          books
        </Button>
        <Button onClick={() => handleChangeCategory('tech')} isActive={isActiveCategory('tech')}>
          tech
        </Button>
      </div>
    </div>
  );
};
