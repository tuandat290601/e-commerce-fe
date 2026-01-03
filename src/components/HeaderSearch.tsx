import { Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const HeaderSearch = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <Search className="w-8 h-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground p-2 cursor-pointer rounded-md" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Searching for products</p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="max-w-none! w-[80vw] h-[90vh]">
        <DialogHeader>
          <DialogTitle>Quick search for your needs</DialogTitle>
          <div className="flex justify-center items-center mt-4">
            <Search className="mr-3 w-5 h-5" />
            <Input
              type="text"
              placeholder="e.g. Cargo pants"
              className="max-w-[50vw] min-w-[300px] w-screen mr-2"
            />
            <Button type="submit" variant="outline">
              Search
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderSearch;
