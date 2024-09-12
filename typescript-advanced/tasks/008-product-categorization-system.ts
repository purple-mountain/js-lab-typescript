type ProductCategory =
  | "Electronics"
  | "Clothing"
  | "Furniture"
  | "Books"
  | "Beauty";

type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

interface Product {
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  price: number;
}

function addProduct(product: Product): string {
  return "The product has been added";
}

function filterProductsByCategory(
  products: Product[],
  productCategory: ProductCategory,
): Product[] {
  return products.filter(({ category }) => productCategory === category);
}

function isProductAvailable(product: Product): boolean {
  return product.status === "In Stock";
}
