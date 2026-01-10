import { getAllCategories } from "@/lib/api/category.api";
import { Suspense } from "react";
import CategoryTableSkeleton from "./CategoryTableSkeleton";

const CategoryTableView = async () => {
  const categories = await getAllCategories();

  return (
    <div className="grid grid-cols-1 gap-2">
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryTableSkeleton />
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </Suspense>
    </div>
  );
};

export default CategoryTableView;
