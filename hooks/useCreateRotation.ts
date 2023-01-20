import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClassInitialState, FormClasses } from 'types/global';

export const useCreateRotation = () => {
  const form = useForm<FormClasses>({
    defaultValues: {
      initialState: { author: '', class: [] },
      spawns: [],
    },
  });

  const options = ['beach', 'stable', 'farm'];
  const { handleSubmit } = form;
  const onSubmit = (data) => {
    console.log(data);
  };
  const [initialStates, setInitialStates] = useState<ClassInitialState[]>([]);

  return {
    options,
    initialStates,
    setInitialStates,
    form,
    handleSubmit,
    onSubmit,
  };
};
