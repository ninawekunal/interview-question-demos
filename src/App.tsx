import "./index.css";
import products from "./data/products";
import ProductTable from "./components/product_table";
import { useState } from "react";

function App() {
  const [endIndex, setEndIndex] = useState(5);

  const startIndex = 0;

  const displayedProducts = products.slice(startIndex, startIndex + endIndex);

  const loadMoreProducts = () => {
    setEndIndex((prev) => prev + 5);
  };

  const [wishListItems, setWishListItems] = useState<Set<number>>(new Set());

  const toggleWishlist = (productId: number) => {
    const newSet = new Set(wishListItems);
    wishListItems.has(productId)
      ? newSet.delete(productId)
      : newSet.add(productId);
    setWishListItems(newSet);
    console.log("added item to wishlist: ", productId);
  };

  return (
    <div id="content">
      <h1>Product Wishlist</h1>
      <button>
        WishList <b>'{wishListItems.size}'</b>
      </button>
      <ProductTable
        wishlistItems={wishListItems}
        toggleWishlist={toggleWishlist}
        products={displayedProducts}
      />
      <button
        hidden={endIndex === products.length}
        onClick={loadMoreProducts}
        id="loadMoreButton"
      >
        {" "}
        Load More{" "}
      </button>
    </div>
  );
}

export default App;
