import { useState } from "react";
import { useProducts } from "./hooks/useProducts.js";
import type { Product } from "./types.js";
type TypeAheadProps = {};

export default function TypeAhead({}: TypeAheadProps) {
  const [value, setValue] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { products } = useProducts();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setValue(input);
    console.log("input: ", input);
    const filteredProducts: string[] = products
      .filter((product) => {
        return product.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
      .map((product) => {
        return product.title;
      });
    setSuggestions(filteredProducts);
    console.log(suggestions);
  }

  function selectSuggestion(title: string) {
    setValue("");
    setSelectedSuggestion(title);
    console.log(`selectedValue: ${title}, suggestion: ${selectedSuggestion}`);
  }

  return (
    <>
      <p>Selected suggestion is: {selectedSuggestion}</p>
      <input
        type="text"
        placeholder="Search for something"
        onChange={handleChange}
        className="searchBox"
        value={value}
      />
      {value && (
        <div className="productSuggestions">
          {suggestions &&
            suggestions.map((productSuggestion) => {
              return (
                <div
                  onClick={() => selectSuggestion(productSuggestion)}
                  key={productSuggestion}
                >
                  {productSuggestion}
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
