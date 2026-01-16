import { UUID } from "./common.interface";
import { IProductVariant } from "./product.interface";

export interface Cart {
  id: UUID;
  user_id: UUID;
  created_at: string;
}

export interface CartItem {
  id: UUID;
  cart_id: UUID;
  variant_id: UUID;
  quantity: number;

  /* UI expanded data */
  variant?: IProductVariant;
}
