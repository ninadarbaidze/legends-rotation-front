import { useState } from 'react';
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
  } = useForm({ defaultValues: { initialState: [] } });
  const options = ['beach', 'stable', 'farm'];

  const [initialClassState, setInitialClassState] = useState([]);

  return { options, setValue, getValues, setInitialClassState };
};
