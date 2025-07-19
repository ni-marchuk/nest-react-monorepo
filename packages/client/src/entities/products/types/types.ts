export type ProductsCategory = 'tech' | 'books' | 'all';

export type ProductsParams = {
  sort: "price-asc" | "price-desc" | "title-asc"
  filters: {
    categories: Array<ProductsCategory>
    maxPrice: number
    inStockOnly: boolean
  },
  pagination: {
    page: number
    pageSize: number
  }
}

export type Product = {
  id: number
  title: string
  price: number
  inStock: boolean
  category: ProductsCategory
}

export type ProductsResultQuery = {
  products: Array<Product>
  totalItems: number
  totalPages: number
  currentPage: number
}