export type ProductsParams = {
  sort: "price-asc" | "price-desc" | "title-asc"
  filters: {
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
  category: string
}