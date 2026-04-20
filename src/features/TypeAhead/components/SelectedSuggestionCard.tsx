import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import type { Product } from "../types.js";

type SelectedProductCardProps = {
  selectedProduct: Product;
};

export default function SelectedProductCard({
  selectedProduct,
}: SelectedProductCardProps) {
  return (
    selectedProduct && (
      <Card>
        <CardHeader
          title={selectedProduct.title}
          subheader={"$" + selectedProduct.price}
        />
        <CardContent>
          <Typography variant="body1">{selectedProduct.description}</Typography>
        </CardContent>
      </Card>
    )
  );
}
