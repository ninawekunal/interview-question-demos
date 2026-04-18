import ProductPageWishlist from "./ProductPageWishlist";
import Providers from "./Providers/QueryClientProvider";

export default function ProductPageWishlistApp() {
  return (
    <Providers>
      <ProductPageWishlist />
    </Providers>
  );
}
