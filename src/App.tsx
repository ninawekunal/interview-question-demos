import { Route, Routes } from "react-router-dom";
import FeatureTabs from "./features/FeatureTabs/FeatureTabs.js";
import ProductPageWishlistApp from "./features/ProductPageWishlist/App.js";
import Contacts from "./features/Contacts/Contacts.js";
import Providers from "./Providers/AllProviders.js";
import TypeAhead from "./features/TypeAhead/TypeAheadComponent.js";
import BreadcrumbPage from "./features/BreadcrumbNavigation/BreadcrumbPage.js";

function App() {
  return (
    <>
      <Providers>
        <Routes>
          <Route
            path="/"
            element={
              <BreadcrumbPage>
                <FeatureTabs />
              </BreadcrumbPage>
            }
          />
          <Route
            path="/ProductPageWishlist"
            element={
              <BreadcrumbPage featureName="Product Page Wishlist">
                <ProductPageWishlistApp />
              </BreadcrumbPage>
            }
          />
          <Route
            path="/Contacts"
            element={
              <BreadcrumbPage featureName="Contacts">
                <Contacts />
              </BreadcrumbPage>
            }
          />
          <Route
            path="/Typeahead"
            element={
              <BreadcrumbPage featureName="Type Ahead">
                <TypeAhead />
              </BreadcrumbPage>
            }
          />
        </Routes>
      </Providers>
    </>
  );
}

export default App;
