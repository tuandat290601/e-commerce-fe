import { getCategory } from "@/lib/api/category.api";

const CategoryDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const category = await getCategory(id);

  console.log("category", category);

  return <div>CategoryDetail</div>;
};

export default CategoryDetail;
