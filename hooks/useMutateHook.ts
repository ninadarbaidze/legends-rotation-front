import { isError, useMutation, useQueryClient } from 'react-query';

export const useMutateHook = (
  mutationFunction: <T, M>(arg: T) => Promise<M>,
  query: string,
  successHandler?: (arg0: any) => void,
  mutationHandler?: <T, M>(args: T) => M | void
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
