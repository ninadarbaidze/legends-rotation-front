import { useFormContext } from 'react-hook-form';

export const useSpawnComponent = () => {
  const { setValue, getValues } = useFormContext();
  return { setValue, getValues };
};
