import { Route, Routes } from "react-router-dom";
import FeatureTabs from "./features/FeatureTabs/FeatureTabs";
import ProductPageWishlistApp from "./features/ProductPageWishlist/App";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FeatureTabs />} />
        <Route
          path="/ProductPageWishlist"
          element={<ProductPageWishlistApp />}
        />
      </Routes>
    </>
  );
}

export default App;
