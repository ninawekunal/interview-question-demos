import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Product } from "../types";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

type ProductTableProps = {
  products: Product[];
  wishlistItems: Set<number>;
  toggleWishlist: (productId: number) => void;
};

export default function ProductTable({
  products,
  wishlistItems,
  toggleWishlist,
}: ProductTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow hover>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Wishlist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                  >
                    {wishlistItems.has(product.id) ? (
                      <Favorite color="error" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
