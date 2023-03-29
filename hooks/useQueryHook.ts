import { useQuery } from 'react-query';

export const useQueryHook = (requestFunction: any, query: string) => {
  const { data, isLoading, isError, isFetched, isFetching } = useQuery({
    queryKey: [query],
    queryFn: () => {
      return requestFunction();
    },
  });

  return { data, isLoading, isError, isFetched, isFetching };
};
