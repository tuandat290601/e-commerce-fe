import { getCategoryTreeView } from "@/lib/api/category.api";

const CategoryTreeView = async () => {
  const categories = await getCategoryTreeView();

  return <div>CategoryTreeView</div>;
};

export default CategoryTreeView;
