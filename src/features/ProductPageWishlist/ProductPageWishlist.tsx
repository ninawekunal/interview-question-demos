import {
  Alert,
  Badge,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import ProductTable from "./components/ProductTable";
import { useProducts } from "./hooks/useProducts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export default function ProductPageWishlist() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [wishListItems, setWishListItems] = useState<Set<number>>(new Set());

  const { products, error, isLoading } = useProducts();

  const displayedProducts = products.slice(0, visibleCount);

  const loadMoreProducts = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const toggleWishlist = (productId: number) => {
    setWishListItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(productId) ? newSet.delete(productId) : newSet.add(productId);
      return newSet;
    });
    console.log("working with item in the wishlist: ", productId);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress aria-label="Loading…" />
      </Box>
    );
  }
  if (error) {
    return <Alert severity="error">Error fetching data from API</Alert>;
  }

  if (products.length === 0) {
    return <Alert severity="warning">No Products found</Alert>;
  }

  return (
    <Grid direction="row">
      <Container sx={{ marginBottom: 2 }}>
        <Grid
          container
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h4">Product Page with wishlist</Typography>
          <IconButton aria-label="cart">
            <Badge
              badgeContent={wishListItems.size.toString()}
              color="secondary"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={2}>
          <ProductTable
            wishlistItems={wishListItems}
            toggleWishlist={toggleWishlist}
            products={displayedProducts}
          />

          <Button
            hidden={visibleCount >= products.length}
            onClick={loadMoreProducts}
            variant="outlined"
          >
            Load More
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}
