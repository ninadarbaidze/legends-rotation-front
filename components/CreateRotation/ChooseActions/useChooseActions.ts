import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useChooseActions = (i: number, k: number) => {
  const { getValues, setValue } = useFormContext();
  const [showActions, setShowActions] = useState(false);

  const isActionsExists = getValues(`waves[${i}].spawn${k}.actions`).length > 0;

  const actionOptions = [
    { value: 1, label: 'Double ultimate' },
    { value: 2, label: 'Ultimate' },
    { value: 3, label: 'Ability' },
    { value: 4, label: 'Build and save ultimate' },
  ];
  return {
    getValues,
    setValue,
    showActions,
    setShowActions,
    actionOptions,
    isActionsExists,
  };
};
