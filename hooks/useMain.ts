import { useRouter } from 'next/router';

export const useMain = () => {
  const router = useRouter();
  return { router };
};
