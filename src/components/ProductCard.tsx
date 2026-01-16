import { IProduct } from "@/interfaces/product.interface";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card className="w-full max-w-sm py-4">
      <CardContent>
        <div className="w-full flex justify-end">
          <Button type="submit" variant="outline" className="cursor-pointer">
            <ShoppingBag />
            Add
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <CardTitle className="text-lg">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          ${product.base_price}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
