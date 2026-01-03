import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const CategoryAdmin = () => {
  return (
    <section className="w-full mt-1">
      <div className="bg-white shadow-md p-4 rounded-md">
        <div className="w-full flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Category</h1>
            <p className="italic text-[12px] mt-0.5 text-muted-foreground">
              Mange categories for your store
            </p>
          </div>
          <Button type="submit" variant="outline" className="cursor-pointer">
            <Plus />
            Add
          </Button>
        </div>
        <div className="flex justify-end items-center">
          <Input
            type="text"
            placeholder="E.g. All Products"
            className="max-w-[20vw] min-w-[300px] w-screen mr-2"
          />
          <Button type="submit" variant="outline">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryAdmin;
