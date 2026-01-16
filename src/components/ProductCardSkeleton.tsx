import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="w-full max-w-sm py-4">
      <CardContent>
        <div className="w-full flex justify-end">
          <Skeleton className="w-19 h-9" />
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <CardTitle className="text-lg">
          <Skeleton className="w-30 h-9" />
        </CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          <Skeleton className="w-20 h-4" />
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
