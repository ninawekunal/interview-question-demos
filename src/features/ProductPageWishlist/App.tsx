import "./styles/index.css";
import ProductTable from "./components/ProductTable";
import { useProducts } from "./hooks/useProducts";
import { useState } from "react";


  // State for controlling how many products are visible
  const [visibleCount, setVisibleCount] = useState(5);

  // Product data and loading/error state
  const { products, error, isLoading } = useProducts();
  const displayedProducts = products.slice(0, visibleCount);


  const [wishListItems, setWishListItems] = useState<Set<number>>(new Set());

  const toggleWishlist = (productId: number) => {
    setWishListItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(productId) ? newSet.delete(productId) : newSet.add(productId);
      return newSet;
    });
    console.log("working with item in the wishlist: ", productId);
  };

  // Handler for loading more products
  const loadMoreProducts = () => setVisibleCount((prev) => prev + 5);

  return (
    <div id="content">
      <h1>Product Wishlist</h1>
      <button>
        WishList <b>({wishListItems.size})</b>
      </button>
      {isLoading && <div>Loading Products...</div>}
      {error && <div>Failed to fetch live products. Showing fallback data.</div>}
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
