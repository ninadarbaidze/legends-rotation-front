import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClassInitialState, FormClasses } from 'types/global';

export const useCreateRotation = () => {
  const form = useForm<FormClasses>({
    defaultValues: { initialState: [], selectedClasses: [] },
  });
  const { getValues } = form;
  const options = ['beach', 'stable', 'farm'];

  const [selectedClasses, setSelectedClasses] = useState<ClassInitialState[]>(
    getValues('initialState')
  );

  console.log(selectedClasses);
  return {
    options,
    selectedClasses,
    setSelectedClasses,

    form,
  };
};
