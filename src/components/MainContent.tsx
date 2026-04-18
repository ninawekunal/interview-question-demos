import "../index.css";
import ProductTable from "./product_table";
import { useQuery } from "@tanstack/react-query";
import dummyProducts from "../data/products.js";
import { useState } from "react";

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    return response.json();
  } catch (ex) {
    throw ex;
  }
}

export default function MainContent() {
  const [visibleCount, setVisibleCount] = useState(5);

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products = error ? dummyProducts : (data ?? []);

  const displayedProducts = products.slice(0, visibleCount);

  const loadMoreProducts = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const [wishListItems, setWishListItems] = useState<Set<number>>(new Set());

  const toggleWishlist = (productId: number) => {
    setWishListItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(productId) ? newSet.delete(productId) : newSet.add(productId);
      return newSet;
    });
    console.log("working with item in the wishlist: ", productId);
  };

  return (
    <div id="content">
      <h1>Product Wishlist</h1>
      <button>
        WishList <b>({wishListItems.size})</b>
      </button>
      {isLoading && <div>Loading Products...</div>}
      {error && (
        <div>Failed to fetch live products. Showing fallback data.</div>
      )}

      {!isLoading && products.length === 0 && <div>No Products Found</div>}
      {products && (
        <ProductTable
          wishlistItems={wishListItems}
          toggleWishlist={toggleWishlist}
          products={displayedProducts}
        />
      )}

      {products && (
        <button
          hidden={visibleCount >= products.length}
          onClick={loadMoreProducts}
          id="loadMoreButton"
        >
          {" "}
          Load More{" "}
        </button>
      )}
    </div>
  );
}
