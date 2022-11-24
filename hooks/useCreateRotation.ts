import { useForm } from 'react-hook-form';

export const useCreateRotation = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    clearErrors,
    setError,
    setFocus,
    reset,
    unregister,
    getValues,
  } = useForm();
  return {};
};
