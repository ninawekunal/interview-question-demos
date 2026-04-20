import { Chip, Stack, Typography } from "@mui/material";
import type { Product } from "../types.js";

type ProductsStackProps = {
  products: Product[];
  selectProduct: (product: Product) => void;
  numProductsToDisplay: number;
};

export default function ProductsStack({
  products,
  selectProduct,
  numProductsToDisplay,
}: ProductsStackProps) {
  return (
    <Stack
      sx={{
        marginTop: 2,
        maxHeight: (numProductsToDisplay * 32).toString() + "px",
        overflow: "auto",
      }}
      className="productSuggestions"
      gap={1}
    >
      {products.map((product) => {
        return (
          <Chip
            variant="outlined"
            clickable
            label={
              <Typography variant="button" sx={{ wordBreak: "break-word" }}>
                {product.title}
              </Typography>
            }
            onClick={() => selectProduct(product)}
            key={product.id}
            sx={{ padding: "10px" }}
          />
        );
      })}
    </Stack>
  );
}
