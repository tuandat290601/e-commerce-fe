"use client";
import { ShoppingBag } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState();

  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="relative">
              <ShoppingBag className="w-8 h-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground p-2 cursor-pointer rounded-md" />
              <Badge className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full p-0 flex items-center justify-center text-[10px]">
                3
              </Badge>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Shopping Cart</p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="max-w-none! min-w-[500px] w-[60vw] h-[90vh]">
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
          <div className="w-full h-full flex justify-center items-center"></div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
