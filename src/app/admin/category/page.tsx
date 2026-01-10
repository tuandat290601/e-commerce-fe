import { Button } from "@/components/ui/button";
import { IPaginatedRequest } from "@/interfaces/request.interface";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import { Fragment } from "react/jsx-runtime";
import CategoryTableSkeleton from "./components/CategoryTableSkeleton";
import CategoryTableView from "./components/CategoryTableView";
import CategoryTreeView from "./components/CategoryTreeView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryTableSearch from "./components/CategoryTableSearch";

const CategoryAdmin = async (props: {
  searchParams: Promise<IPaginatedRequest>;
}) => {
  const params = await props.searchParams;
  const queryParams: IPaginatedRequest = {
    query: params.query ?? "",
    page: params.page ?? 1,
    pageSize: params.pageSize ?? 10,
  };

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
            <CategoryTableSearch placeholder="" />
          </div>
          <div className="mt-4">
            <TabsContent value="table">
              <Suspense
                key={
                  queryParams.query &&
                  queryParams.page &&
                  queryParams.pageSize &&
                  `${queryParams.query}-${queryParams.page}-${queryParams.pageSize}`
                }
                fallback={
                  <div className="grid grid-cols-1 gap-2">
                    <CategoryTableSkeleton />
                    <CategoryTableSkeleton />
                    <CategoryTableSkeleton />
                  </div>
                }
              >
                <CategoryTableView queryParams={queryParams} />
              </Suspense>
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
