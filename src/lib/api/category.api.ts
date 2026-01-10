import { ICategory } from "@/interfaces/category.interface";
import { categories } from "@/mocks/categories";
import { fetchAPI } from "./api";
import { IPaginatedRequest } from "@/interfaces/request.interface";

export const getCategoryTreeView = async () => {
  return categories;
};

export const getAllCategories = async (
  params: IPaginatedRequest
): Promise<ICategory[]> => {
  let queryParams = "?";
  if (params.query !== undefined) {
    queryParams += `query=${params.query}&`;
  }
  if (params.page !== undefined) {
    queryParams += `page=${params.page}&`;
  }
  if (params.pageSize !== undefined) {
    queryParams += `pageSize=${params.pageSize}&`;
  }

  const res = await fetchAPI<any>(`/category${queryParams}`, {
    next: { revalidate: 300 },
  });

  if (Array.isArray(res)) return res as ICategory[];
  if (res && Array.isArray(res.items)) return res.items as ICategory[];
  if (res && Array.isArray(res.data)) return res.data as ICategory[];

  return [];
};

export const getCategory = (id: string): Promise<ICategory> => {
  return fetchAPI<ICategory>(`/category/${id}`, {
    next: { revalidate: 300 },
  });
};
