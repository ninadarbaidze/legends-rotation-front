import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormClasses } from 'types/global';

export const useCreateRotation = () => {
  const form = useForm<FormClasses>({
    defaultValues: { initialState: [], selectedClasses: [] },
  });
  const { getValues } = form;
  const options = ['beach', 'stable', 'farm'];

  const [initialClassState, setInitialClassState] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState<any[]>(
    getValues('initialState')
  );
  return {
    options,
    selectedClasses,
    setSelectedClasses,
    initialClassState,
    setInitialClassState,
    form,
  };
};
