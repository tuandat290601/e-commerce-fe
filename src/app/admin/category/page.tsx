import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import CategoryTableView from "./components/CategoryTableView";
import CategoryTreeView from "./components/CategoryTreeView";

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
        <Tabs defaultValue="table">
          <div className="flex justify-between items-center">
            <Fragment>
              <TabsList>
                <TabsTrigger value="table">Table View</TabsTrigger>
                <TabsTrigger value="tree">Tree View</TabsTrigger>
              </TabsList>
            </Fragment>
            <div>
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
          <div className="mt-4">
            <TabsContent value="table">
              <CategoryTableView />
            </TabsContent>
            <TabsContent value="tree">
              <CategoryTreeView />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default CategoryAdmin;
