import { IProductWithVariants } from "@/interfaces/product.interface";
import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import { cache } from "react";

const getProductDetailsBySlug = cache(
  async (slug: string): Promise<IProductWithVariants | null> => {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single();

    console.log("Product data:", data, "Error:", error);

    if (error) {
      console.error("Error fetching product:", error);
      return null;
    }

    return data as IProductWithVariants;
  }
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductDetailsBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    };
  }

  return {
    title: product.name || "Product",
    description: product.description || "View product details",
    openGraph: {
      title: product.name,
      description: product.description,
      // images: product.image ? [product.image] : [],
    },
  };
}

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductDetailsBySlug(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full max-w-screen-2xl mt-16 mx-auto">
      <h1>{product.name}</h1>
      {/* Render your product details */}
    </div>
  );
};

export default ProductDetailPage;
