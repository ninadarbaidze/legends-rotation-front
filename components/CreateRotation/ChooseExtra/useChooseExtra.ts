import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useChooseExtra = () => {
  const [showExtra, setShowExtra] = useState(false);
  const { getValues, setValue } = useFormContext();

  const extraOptions = [
    { value: 'barrel', label: 'Barrel' },
    { value: 'buy_things', label: 'Buy something' },
  ];
  return { showExtra, setShowExtra, extraOptions, getValues, setValue };
};
