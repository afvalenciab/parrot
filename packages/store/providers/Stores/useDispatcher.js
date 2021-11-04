import { useDispatch } from 'react-redux';
import * as actions from 'providers/Stores/actions';

export default function useDispatcher() {
  const dispatch = useDispatch();

  return {
    getStores: () => dispatch(actions.getStores()),
    getProducts: values => dispatch(actions.getProducts(values)),
    editProduct: values => dispatch(actions.editProduct(values)),
  };
}
