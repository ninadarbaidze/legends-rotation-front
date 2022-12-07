import { useState } from 'react';

export const useClassSelectInput = () => {
  const [selectedClasses, setSelectedClasses] = useState<any[]>([]);
  const [selectMenuIsVisible, setSelectMenuIsVisible] = useState(false);
  const [colors, setColors] = useState(['red', 'blue', 'green', 'black']);

  const selectOptionHandler = (selectedOption: {
    title: string;
    icon: string;
  }) => {
    // const colors = ['red', 'blue', 'green', 'black'];
    setSelectMenuIsVisible(false);
    // setSelectedOption(selectedOption);
    if (selectedClasses.length < 4) {
      setSelectedClasses((prevState) => [
        ...prevState,
        {
          id:
            prevState.length === 0 ? 1 : prevState[prevState.length - 1].id + 1,
          title: selectedOption.title,
          image: selectedOption.icon,
          color: colors[0],
        },
      ]);
      setColors((prevState) => {
        return prevState.slice(1);
      });
    }
  };

  const options = [
    { title: 'Hunter', icon: '/images/hunter.png' },
    { title: 'Samurai', icon: '/images/samurai.png' },
    { title: 'Assassin', icon: '/images/assassin.png' },
    { title: 'Ronin', icon: '/images/ronin.png' },
  ];

  const deleteClassHandler = (classId) => {
    setSelectedClasses((prevState) => {
      return prevState.filter((item) => item.id !== classId);
    });

    setColors((prevState) => {
      const deleteColor = selectedClasses.filter(
        (item) => item.id === classId
      )[0].color;
      prevState.unshift(deleteColor);
      return prevState;
    });
  };

  console.log(selectedClasses);

  return {
    selectMenuIsVisible,
    setSelectMenuIsVisible,
    options,
    selectOptionHandler,
    selectedClasses,
    deleteClassHandler,
  };
};
