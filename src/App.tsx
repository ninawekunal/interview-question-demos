import { Route, Routes } from "react-router-dom";
import FeatureTabs from "./features/FeatureTabs/FeatureTabs.js";
import ProductPageWishlistApp from "./features/ProductPageWishlist/App.js";
import Contacts from "./features/Contacts/Contacts.js";
import Providers from "./Providers/AllProviders.js";
import TypeAhead from "./features/TypeAhead/TypeAheadComponent.js";

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
          <Route path="/Typeahead" element={<TypeAhead />} />
        </Routes>
      </Providers>
    </>
  );
}

export default App;
