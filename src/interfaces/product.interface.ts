import { UUID } from "./common.interface";

/* ---------- Category ---------- */
export interface ICategory {
  id: UUID;
  name: string;
  slug: string;
  parent_id?: UUID | null;
}

/* ---------- Product ---------- */
export interface IProduct {
  id: UUID;
  name: string;
  slug: string;
  description?: string;
  brand?: string;
  base_price: number;
  is_active: boolean;
}

/* ---------- Product Variant ---------- */
export interface IProductVariant {
  id: UUID;
  product_id: UUID;
  size: string;
  color: string;
  sku: string;
  price?: number | null;
}

/* ---------- Inventory ---------- */
export interface IInventory {
  variant_id: UUID;
  quantity: number;
}

/* ---------- Images ---------- */
export interface IProductImage {
  id: UUID;
  product_id?: UUID | null;
  variant_id?: UUID | null;
  image_url: string;
  is_primary: boolean;
}

/* ---------- Product (Aggregated for UI) ---------- */
export interface IProductWithVariants extends IProduct {
  categories: ICategory[];
  variants: IProductVariant[];
  images: IProductImage[];
}
