"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Fragment } from "react";

const CategoryTableSearch = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <Input
        type="text"
        placeholder={
          placeholder && placeholder.length !== 0
            ? placeholder
            : "E.g. All Products"
        }
        className="max-w-[20vw] min-w-[300px] w-screen mr-2"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Button type="submit" variant="outline">
        Search
      </Button>
    </div>
  );
};

export default CategoryTableSearch;
