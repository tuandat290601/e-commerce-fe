import { UUID } from "./common.interface";
import { IProductVariant } from "./product.interface";

/* ---------- Address ---------- */
export interface IAddress {
  id: UUID;
  user_id: UUID;
  full_name: string;
  phone: string;
  address_line: string;
  city: string;
  country: string;
  postal_code: string;
  is_default: boolean;
}

/* ---------- Order ---------- */
export type OrderStatus =
  | "pending"
  | "paid"
  | "shipped"
  | "completed"
  | "cancelled";

export interface IOrder {
  id: UUID;
  user_id: UUID;
  address_id: UUID;
  status: OrderStatus;
  total_amount: number;
  created_at: string;
}

/* ---------- Order Item ---------- */
export interface IOrderItem {
  id: UUID;
  order_id: UUID;
  variant_id: UUID;
  price: number;
  quantity: number;

  /* UI helper */
  variant?: IProductVariant;
}

/* ---------- Payment ---------- */
export interface IPayment {
  id: UUID;
  order_id: UUID;
  provider: "stripe" | "paypal";
  payment_intent?: string;
  amount: number;
  status: "pending" | "succeeded" | "failed";
  created_at: string;
}
