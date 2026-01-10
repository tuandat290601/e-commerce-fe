import { Skeleton } from "@/components/ui/skeleton";

const CategoryTableSkeleton = () => {
  return (
    <div className="flex">
      <Skeleton className="rounded-full shadow-md w-12 h-12" />
      <div className="flex flex-col justify-between ml-4">
        <Skeleton className="w-40 h-6" />
        <Skeleton className="w-96 h-4" />
      </div>
    </div>
  );
};

export default CategoryTableSkeleton;
