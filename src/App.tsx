import { Route, Routes } from "react-router-dom";
import FeatureTabs from "./features/FeatureTabs/FeatureTabs";
import ProductPageWishlistApp from "./features/ProductPageWishlist/App";
import ContactForm from "./features/ContactForm/ContactForm";
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
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </Providers>
    </>
  );
}

export default App;
