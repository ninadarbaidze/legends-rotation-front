import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ClassInitialState, SetState } from 'types/global';

export const useClassSelectInput = (
  initialState: boolean,
  selectedClasses: ClassInitialState[],
  setSelectedClasses: SetState<ClassInitialState[]>
) => {
  const [selectMenuIsVisible, setSelectMenuIsVisible] = useState(false);
  const [classes, setClasses] = useState<ClassInitialState[]>([]);
  const [colors, setColors] = useState(['red', 'blue', 'green', 'black']);
  const { setValue, getValues } = useFormContext();
  initialState && setValue('initialState', selectedClasses);
  !initialState && setValue('selectedClasses', classes);

  const selectOptionHandler = (selectedOption: {
    title: string;
    image: string;
    color: string;
    id: number | null;
  }) => {
    if (initialState) {
      setSelectMenuIsVisible(false);
      if (selectedClasses.length < 4) {
        setSelectedClasses((prevState: ClassInitialState[]) => [
          ...prevState,
          {
            id:
              prevState.length === 0
                ? 1
                : (prevState[prevState.length - 1].id as number) + 1,
            title: selectedOption.title,
            image: selectedOption.image,
            color: colors[0],
          },
        ]);
        setColors((prevState) => {
          return prevState.slice(1);
        });
      }
    } else {
      setClasses((prevState) => [
        ...prevState,
        {
          ...selectedOption,
        },
      ]);
    }
  };

  const options = [
    { title: 'Hunter', image: '/images/hunter.png', color: '', id: null },
    { title: 'Samurai', image: '/images/samurai.png', color: '', id: null },
    { title: 'Assassin', image: '/images/assassin.png', color: '', id: null },
    { title: 'Ronin', image: '/images/ronin.png', color: '', id: null },
  ];

  const deleteClassHandler = (classId: number) => {
    setSelectedClasses((prevState: ClassInitialState[]) => {
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

  return {
    selectMenuIsVisible,
    setSelectMenuIsVisible,
    options,
    selectOptionHandler,
    selectedClasses,
    deleteClassHandler,
    classes,
    getValues,
  };
};