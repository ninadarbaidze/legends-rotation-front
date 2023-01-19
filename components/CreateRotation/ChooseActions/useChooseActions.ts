import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useChooseActions = () => {
  const { getValues, setValue } = useFormContext();
  const [showActions, setShowActions] = useState(false);

  const actionOptions = [
    { value: 'double_ultimate', label: 'Double ultimate' },
    { value: 'ultimate', label: 'Ultimate' },
    { value: 'ability', label: 'Ability' },
    { value: 'build_save_ultimate', label: 'Build and save ultimate' },
  ];
  return { getValues, setValue, showActions, setShowActions, actionOptions };
};
