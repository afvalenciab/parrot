import { useContext } from 'react';
import { StoreContext } from 'providers/Stores';

export function useSelectorsStore() {
  const { state } = useContext(StoreContext);

  return {
    storesState: state.stores,
    productsState: state.products,
    editProductState: state.productEdition,
  };
}
