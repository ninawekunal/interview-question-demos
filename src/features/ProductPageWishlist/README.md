# Product Page with Wishlist

Display products and add them to a wishlist.

## What this feature taught me

### Data Fetching
Fetched and displayed live API data using React Query, with a local `dummyProducts` fallback when the network call fails.

### State Management
Managed wishlist interactions with efficient local state updates by storing wishlisted product IDs in a `Set<number>` and toggling membership.

### UX States
Handled loading, error, and empty states so the UI stays predictable while data is being fetched or when the API returns no results.

### Pagination
Implemented incremental “load more” pagination by increasing a `visibleCount` and slicing the fetched product list.

### UI System
Used Material UI’s table, icons, and layout primitives to keep the UI consistent and composable.

## Key files
- `src/features/ProductPageWishlist/ProductPageWishlist.tsx` — page container, wishlist state, load-more logic, and UX states.
- `src/features/ProductPageWishlist/hooks/useProducts.ts` — React Query hook and fallback behavior.
- `src/features/ProductPageWishlist/components/ProductTable.tsx` — table rendering + wishlist toggle UI.
- `src/features/ProductPageWishlist/data/products.ts` — local fallback data.

## Skills practiced
- React Query
- Wishlist state
- Loading / error / empty states
- Incremental pagination
- Material UI

