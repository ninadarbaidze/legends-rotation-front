import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormClasses } from 'types/global';

export const useCustomSelectInput = (
  i: number,
  k: number,
  isInitial: boolean,
  hydratedData?: FormClasses
) => {
  const [selectMenuIsVisible, setSelectMenuIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const { setValue, getValues } = useFormContext();

  const selectOptionHandler = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    setSelectMenuIsVisible(false);

    isInitial
      ? setValue(`initialState.weeklyModifier`, selectedOption)
      : setValue(`waves[${i}].spawn${k}`, {
          ...getValues(`waves[${i}].spawn${k}`),
          spawnLocation: selectedOption,
        });
  };

  const hydratedSelectedOption =
    !!!selectedOption && hydratedData?.id
      ? isInitial
        ? hydratedData?.initialState?.weeklyModifier
        : hydratedData?.waves[i][`spawn${k}`].spawnLocation
      : selectedOption;

  return {
    selectMenuIsVisible,
    setSelectMenuIsVisible,
    selectedOption,
    selectOptionHandler,
    setSelectedOption,
    hydratedSelectedOption,
  };
};
