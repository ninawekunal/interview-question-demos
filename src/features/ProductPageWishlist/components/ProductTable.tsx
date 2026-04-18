import "../styles/index.css";
import { Product } from "../types";

type ProductTableProps = {
  products: Product[];
  wishlistItems: Set<number>;
  toggleWishlist: (productId: number) => void;
};

export default function ProductTable({
  products,
  wishlistItems,
  toggleWishlist,
}: ProductTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Wishlist</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="addToWishlist"
                >
                  {wishlistItems.has(product.id) ? "Remove from " : "Add to "}
                  wishlist
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
