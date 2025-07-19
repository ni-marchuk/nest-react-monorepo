import type { Product, ProductsParams } from '@entities/products/types/types.ts';

/** фронтовые фильтры, пока нет на бекенде */
export const processProducts = (products: Array<Product>, params: ProductsParams) => {
  const { pagination, filters, sort } = params;
  const { page = 1, pageSize = 10 } = pagination;

  const defaultValue = {
    products: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: page,
  };


  if (!products?.length) return defaultValue;

  let filteredProducts = products.filter(p => {
    const { category, inStock, price } = p;

    if (filters.categories.length) {
      if (!filters.categories.includes('all')) {
        if (!filters.categories.includes(category)) {
          return false;
        }
      }
    }

    if (filters?.maxPrice && (filters.maxPrice < price)) {
      return false;
    }

    if (filters.inStockOnly && !inStock) {
      return false;
    }

    return true;
  });

  if (sort === 'price-asc') filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  if (sort === 'title-asc') filteredProducts = filteredProducts.sort((a, b) => a.title.localeCompare(b.title));

  const start = page === 1 ? 0 : (page * pageSize) - pageSize;
  const end = start + pageSize;

  const pageItems = filteredProducts.slice(start, end);
  const filteredProductsLength = filteredProducts.length;

  return {
    products: pageItems,
    totalItems: filteredProductsLength,
    totalPages: Math.ceil(filteredProductsLength / pageSize),
    currentPage: page,
  };
};
