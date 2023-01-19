import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClassInitialState, FormClasses } from 'types/global';

export const useCreateRotation = () => {
  const form = useForm<FormClasses>({
    defaultValues: {
      initialState: [],
      spawns: [],
    },
  });

  const options = ['beach', 'stable', 'farm'];
  const { getValues } = form;
  // console.log(getValues());

  const [initialStates, setInitialStates] = useState<ClassInitialState[]>([]);

  return {
    options,
    initialStates,
    setInitialStates,
    form,
  };
};
