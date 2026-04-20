# Suggestion autocomplete search (Typeahead)

Build a high-performance search input component that filters the product list below for an e-commerce product search.
Following Shruti Kapoor's work.

## Requirements (core)

### Core functionality
- Render a search input that filters products as the user types.
- Fetch products from an API (or use fallback data when the API fails).
- Allow selecting a product via mouse click.
- Render selected product on screen.

### UX states
- Loading state while fetching suggestions.
- Error state when the API request fails.
- Empty state when no results match - show no products found
- Show certain number of products initially.

### Accessibility / keyboard navigation
- `ArrowUp` / `ArrowDown` moves through suggestions.
- `Enter` selects the highlighted suggestion.
- `Escape` closes the suggestions dropdown.
- `Tab` moves focus away from the component.
- Visual highlight indicates the currently selected suggestion.
- The dropdown maintains scroll position for long result lists.

## Nice-to-haves
- Debouncing to prevent excessive API calls while typing.
- Request cancellation for outdated searches (ignore/abort in-flight requests when a new query starts).
- Virtualization for large result sets (100+ items).
- MUI design polish (input adornments, dropdown styling, hover/focus states, consistent spacing).

## What I’ve implemented (in this repo)
- Fetch products with React Query and use `dummyProducts` as a fallback on error.
- Typeahead filtering on the client (filters `products` by `title` and renders up to N suggestions).
- Click-to-select suggestions and render the selected item details.
- Basic MUI layout (Card, TextField, Chip list).

## What’s still pending
- Debounced API querying by search term (right now it filters locally on every keystroke).
- Full keyboard navigation + ARIA combobox/listbox semantics.
- Better UX states (loading/error/empty messaging inside the typeahead area).
- Submit behavior for custom search text (Enter-to-search when nothing is highlighted).
- Perf: cancellation + virtualization + memoization for larger data sets.

## Key files
- `src/features/TypeAhead/TypeAheadComponent.tsx` — container state + filtering + selection.
- `src/features/TypeAhead/hooks/useProducts.ts` — React Query fetch + fallback.
- `src/features/TypeAhead/components/SearchBox.tsx` — input.
- `src/features/TypeAhead/components/ProductsStack.tsx` — suggestions list.
- `src/features/TypeAhead/components/SelectedSuggestionCard.tsx` — selected item UI.
- `src/features/TypeAhead/data/products.ts` — fallback data.

