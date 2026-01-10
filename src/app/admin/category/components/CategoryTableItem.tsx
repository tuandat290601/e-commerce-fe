import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ICategory } from "@/interfaces/category.interface";
import { Delete, Edit, Eye, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CategoryTableItem = ({ category }: { category: ICategory }) => {
  return (
    <div className="flex rounded-md p-2 cursor-pointer hover:my-2 hover:shadow-md hover:bg-muted/50 transition-all duration-200">
      <Image
        src={
          "https://caulongnamha.vn/image/catalog/banner/vn-11134207-7qukw-lk9kd0datpd400.jpg"
        }
        alt={category.name}
        width={48}
        height={48}
        className="rounded-full shadow-md w-12 h-12"
      />
      <div className="flex flex-1 ">
        <div className="w-full flex flex-1 justify-between px-4">
          <div className="h-full flex flex-col justify-between">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col">
                  <Link
                    href={`category/${category.id}`}
                    className="text-lg font-semibold"
                  >
                    {category.name}
                    <p className="text-sm truncate max-w-lg text-muted-foreground">
                      {category.description}
                    </p>
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent className="w-96" side="bottom">
                {category.description}
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="h-full flex flex-col justify-between">
            <Skeleton className="w-20 h-2" />
            <Skeleton className="w-20 h-2" />
            <Skeleton className="w-20 h-2" />
          </div>
        </div>
        <div className="my-auto grid grid-cols-3 gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild className="bg-green-600">
                <Link href={`category/${category.id}`}>
                  <Eye />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">View {category.name}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild className="bg-blue-500">
                <Link href={`category/${category.id}?edit=true`}>
                  <Edit />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Edit {category.name}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild className="bg-red-400">
                <Link href={`category/${category.id}`}>
                  <Trash />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Delete {category.name}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CategoryTableItem;
