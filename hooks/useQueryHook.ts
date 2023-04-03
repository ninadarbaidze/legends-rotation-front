import { useQuery } from 'react-query';

export const useQueryHook = (
  requestFunction: any,
  query: string,
  id?: number
) => {
  const { data, isLoading, isError, isFetched, isFetching } = useQuery({
    queryKey: [query, id],
    queryFn: () => requestFunction(id),
  });

  return { data, isLoading, isError, isFetched, isFetching };
};
