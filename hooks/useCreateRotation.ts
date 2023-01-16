import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClassInitialState, FormClasses } from 'types/global';

export const useCreateRotation = () => {
  const form = useForm<FormClasses>({
    defaultValues: { initialState: [], selectedOptions: [] },
  });
  const options = ['beach', 'stable', 'farm'];

  const [initialStates, setInitialStates] = useState<ClassInitialState[]>([]);

  return {
    options,
    initialStates,
    setInitialStates,
    form,
  };
};
