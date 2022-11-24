import { useState } from 'react';

export const useCustomSelectInput = (
  setSelectedOption: (arg0: string) => void
) => {
  const [selectMenuIsVisible, setSelectMenuIsVisible] = useState(false);
  const selectOptionHandler = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    setSelectMenuIsVisible(false);
  };
  return {
    selectMenuIsVisible,
    setSelectMenuIsVisible,

    selectOptionHandler,
  };
};
