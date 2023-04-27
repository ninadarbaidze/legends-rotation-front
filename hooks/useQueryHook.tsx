import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const useQueryHook = (
  requestFunction: any,
  query: string,
  id?: string
) => {
  const router = useRouter();

  const { data, isLoading, isError, isFetched, isFetching } = useQuery({
    queryKey: [query, id],
    queryFn: () => requestFunction(id),
    onError: (err: any) =>
      err?.response?.status === 403
        ? router.push('/403')
        : err?.response?.status === 404
        ? router.push('/404')
        : router.push('/rotations'),
    retry: false,
  });

  return { data, isLoading, isError, isFetched, isFetching };
};
