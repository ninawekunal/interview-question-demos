import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ProductPageWishlist from "./features/ProductPageWishlist/App";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* You can import and render other features here as needed */}
      <ProductPageWishlist />
    </QueryClientProvider>
  );
}

export default App;
