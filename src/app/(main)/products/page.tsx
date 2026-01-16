"use client";

import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { IProduct } from "@/interfaces/product.interface";
import { createClient } from "@/lib/supabase/client";
import { Fragment, useEffect, useState } from "react";

const ProductPage = () => {
  const [data, setData] = useState<IProduct[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        setError(error.message);
        return;
      }
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-screen-2xl mx-auto mt-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data ? (
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <Fragment>
            {[...Array(10)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
