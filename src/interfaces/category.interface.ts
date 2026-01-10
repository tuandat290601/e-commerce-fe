import { IProduct } from "./product.interface";

export interface ICategory {
  id: string;
  name: string;
  description?: string;
  products?: IProduct[];
  children?: ICategory[];
}
