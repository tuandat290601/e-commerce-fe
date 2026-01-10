import { Skeleton } from "@/components/ui/skeleton";

const CategoryTableSkeleton = () => {
  return (
    <div className="flex">
      <Skeleton className="rounded-full shadow-md w-12 h-12" />
      <div className="flex flex-1 ">
        <div className="w-full flex flex-1 justify-between px-4">
          <div className="h-full flex flex-col justify-between ">
            <Skeleton className="w-40 h-6 " />
            <Skeleton className="w-96 h-4 " />
          </div>
          <div className="h-full flex flex-col justify-between">
            <Skeleton className="w-20 h-2 " />
            <Skeleton className="w-20 h-2 " />
            <Skeleton className="w-20 h-2 " />
          </div>
        </div>
        <div className="my-auto grid grid-cols-3 gap-2">
          <Skeleton className="w-10 h-10 " />
          <Skeleton className="w-10 h-10 " />
          <Skeleton className="w-10 h-10 " />
        </div>
      </div>
    </div>
  );
};

export default CategoryTableSkeleton;
