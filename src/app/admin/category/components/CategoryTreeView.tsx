import { getCategoryTreeView } from "@/lib/api/category.api";

const CategoryTreeView = async () => {
  const categories = await getCategoryTreeView();

  console.log(categories);

  return <div>CategoryTreeView</div>;
};

export default CategoryTreeView;
