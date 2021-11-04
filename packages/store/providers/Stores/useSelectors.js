import { useSelector } from 'react-redux';

export default function useSelectors() {
  return {
    storesState: useSelector(state => state.stores),
    productsState: useSelector(state => state.products),
    editProductState: useSelector(state => state.productEdition),
  };
}
