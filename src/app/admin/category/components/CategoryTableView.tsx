import { ICategory } from "@/interfaces/category.interface";
import { IPaginatedRequest } from "@/interfaces/request.interface";
import { getAllCategories } from "@/lib/api/category.api";
import { Suspense } from "react";
import CategoryTableItem from "./CategoryTableItem";
import CategoryTableSkeleton from "./CategoryTableSkeleton";

const CategoryTableView = async ({
  queryParams,
}: {
  queryParams: IPaginatedRequest;
}) => {
  const categories = await getAllCategories(queryParams);

  return (
    <div>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-2">
            <CategoryTableSkeleton />
            <CategoryTableSkeleton />
            <CategoryTableSkeleton />
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-2">
          {categories.length === 0 && (
            <p className="text-center text-muted-foreground">
              No categories found.
            </p>
          )}
          {categories.map((category: ICategory) => (
            <CategoryTableItem category={category} key={category.id} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default CategoryTableView;
