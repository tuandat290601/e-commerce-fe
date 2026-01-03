import { ICategory } from "./category.interface";

export interface IProductCard {
  id: number;
  name: string;
  price: number;
  discount: IDiscount;
}

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  category: ICategory;
  variants: IVariant[];
  discounts: IDiscount[];
}

export interface IVariant {
  id: number;
  productId: number;
  sku: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  image: string;
}

export interface IDiscount {
  id: number;
  name: string;
  discountPercent: number;
}
