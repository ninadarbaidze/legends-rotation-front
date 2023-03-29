import { isError, useMutation, useQueryClient } from 'react-query';

export const useMutateHook = (
  mutationFunction: <T, M>(arg: T) => Promise<M>,
  query: string,
  successHandler?: <T, M>(args: T) => M,
  mutationHandler?: <T, M>(args: T) => M
) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(mutationFunction, {
    onSuccess: (data) => {
      successHandler?.(data);
    },
    onMutate: async (data: any) => {
      mutationHandler?.(data);
    },
    onError: (err) => {
      console.error(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries(query);
    },
  });

  return { isLoading, isError, mutate };
};
