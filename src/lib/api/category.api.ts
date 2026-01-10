import { ICategory } from "@/interfaces/category.interface";
import { categories } from "@/mocks/categories";
import { fetchAPI } from "./api";

export const getCategoryTreeView = async () => {
  return categories;
};

export const getAllCategories = (): Promise<ICategory[]> => {
  return fetchAPI<ICategory[]>("/category", {
    next: { revalidate: 300 },
  });
};
