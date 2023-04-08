import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormClasses } from 'types/global';

export const useCustomSelectInput = (
  i: number,
  k: '1' | '2' | '3',
  isInitial: boolean,
  hydratedData?: FormClasses,
  spawnMapChanges?: boolean
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

  const SpawnN: 'spawn1' | 'spawn2' | 'spawn3' = `spawn${k}`;

  const hydratedSelectedOption =
    !!!selectedOption && hydratedData?.id
      ? isInitial
        ? hydratedData?.initialState?.weeklyModifier
        : hydratedData?.waves[i][SpawnN].spawnLocation
      : selectedOption;

  useEffect(() => {
    setValue(`waves[${i}].spawn${k}`, {
      ...getValues(`waves[${i}].spawn${k}`),
      spawnLocation: '',
    });
    setSelectedOption('');
  }, [spawnMapChanges]);

  return {
    selectMenuIsVisible,
    setSelectMenuIsVisible,
    selectedOption,
    selectOptionHandler,
    setSelectedOption,
    hydratedSelectedOption,
  };
};
