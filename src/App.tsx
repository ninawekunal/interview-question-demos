import { Route, Routes } from "react-router-dom";
import FeatureTabs from "./features/FeatureTabs/FeatureTabs";
import ProductPageWishlistApp from "./features/ProductPageWishlist/App";
import Contacts from "./features/Contacts/Contacts";
import Providers from "./Providers/AllProviders";

function App() {
  return (
    <>
      <Providers>
        <Routes>
          <Route path="/" element={<FeatureTabs />} />
          <Route
            path="/ProductPageWishlist"
            element={<ProductPageWishlistApp />}
          />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </Providers>
    </>
  );
}

export default App;
