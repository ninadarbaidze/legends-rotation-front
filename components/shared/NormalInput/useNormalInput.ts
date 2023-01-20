import { useFormContext } from 'react-hook-form';

export const useNormalInput = () => {
  const {
    register,
    formState: { errors, isDirty },
  } = useFormContext();
  return { register, errors, isDirty };
};
