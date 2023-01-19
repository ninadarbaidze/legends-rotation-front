import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useCustomSelectInput = (i: number, k: number) => {
  const [selectMenuIsVisible, setSelectMenuIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const { setValue, getValues } = useFormContext();

  const selectOptionHandler = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    setSelectMenuIsVisible(false);
    setValue(`spawns[${i}].spawn${k}`, {
      ...getValues(`spawns[${i}].spawn${k}`),
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
