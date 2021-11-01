import useSWR from 'swr';
import request from 'utils/request';

import { BASE_URL } from 'utils/request/stores';

export default function useProducts({ storeId }) {
  const { data, error } = useSWR(`${BASE_URL}/v1/products/?store=${storeId}`, request, {
    refreshInterval: 1000,
  });

  return { currentList: data?.results, error };
}
