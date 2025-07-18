import type { Product } from '@entities/products/types/types.ts';

export const ProductsMock: Array<Product> = [
  {
    id: 1,
    title: 'Война и мир',
    price: 122,
    inStock: true,
    category: 'books',
  },
  {
    id: 1,
    title: 'Как говорил заратустра',
    price: 112,
    inStock: true,
    category: 'books',
  },
];