import { useQuery } from "@tanstack/react-query";
import dummyProducts from "../data/products";

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    return response.json();
  } catch (ex) {
    throw ex;
  }
}

export function useProducts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products = error ? dummyProducts : (data ?? []);
  return { products, error, isLoading };
}
