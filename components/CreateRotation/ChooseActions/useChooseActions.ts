import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useChooseActions = (i: number, k: number) => {
  const { getValues, setValue } = useFormContext();
  const [showActions, setShowActions] = useState(false);

  const isActionsExists = getValues(`waves[${i}].spawn${k}.actions`).length > 0;

  return {
    getValues,
    setValue,
    showActions,
    setShowActions,
    isActionsExists,
  };
};
