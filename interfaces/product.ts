// interfaces/product.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  features: string[];
  iconPath: string;
}

export interface ProductCardProps {
  product: Product;
}