import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useCustomSelectInput = (
  i: number,
  k: number,
  isInitial: boolean
) => {
  const [selectMenuIsVisible, setSelectMenuIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const { setValue, getValues } = useFormContext();

  const selectOptionHandler = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    setSelectMenuIsVisible(false);

    isInitial
      ? setValue(`initialState`, {
          weeklyModifier: selectedOption,
        })
      : setValue(`waves[${i}].spawn${k}`, {
          ...getValues(`waves[${i}].spawn${k}`),
          spawnLocation: selectedOption,
        });
  };
  return {
    selectMenuIsVisible,
    setSelectMenuIsVisible,
    selectedOption,
    selectOptionHandler,
  };
};
