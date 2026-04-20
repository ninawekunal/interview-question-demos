import { useEffect, useState } from "react";
import { useProducts } from "./hooks/useProducts.js";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid2,
} from "@mui/material";
import type { Product } from "./types.js";
import ProductsStack from "./components/ProductsStack.js";
import SearchBox from "./components/SearchBox.js";
import SelectedProductCard from "./components/SelectedSuggestionCard.js";
type TypeAheadProps = {};

export default function TypeAhead({}: TypeAheadProps) {
  const [value, setValue] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState<Product>();
  const [suggestions, setSuggestions] = useState<Product[]>([]);

  const { products } = useProducts();

  useEffect(() => {
    setSuggestions(products);
  }, [products]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setValue(input);
    const filteredProducts: Product[] = products.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSuggestions(filteredProducts);
  }

  function selectSuggestion(product: Product) {
    setValue("");
    setSelectedSuggestion(product);
    setSuggestions(products);
  }

  return (
    <Box>
      <Container maxWidth="xl">
        <Card>
          <CardHeader
            title="Product Search box with suggestions"
            subheader="Start typing to filter our products"
          />
          <CardContent>
            <Grid2 container display="flex" flexDirection="row" sx={{ gap: 4 }}>
              <Grid2 size={5}>
                <SearchBox value={value} handleChange={handleChange} />
                <Grid2>
                  <Container>
                    <ProductsStack
                      products={suggestions}
                      selectProduct={selectSuggestion}
                      numProductsToDisplay={10}
                    />
                  </Container>
                </Grid2>
              </Grid2>
              <Grid2 size={6}>
                <Grid2 size={12}>
                  <SelectedProductCard selectedProduct={selectedSuggestion} />
                </Grid2>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
