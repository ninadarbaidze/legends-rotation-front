import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ClassInitialState, FormClasses, SetState } from 'types/global';

export const useClassSelectInput = (
  initialState: boolean,
  selectedClasses: ClassInitialState[],
  setSelectedClasses: SetState<ClassInitialState[]>,
  i: number,
  k: number,
  hydratedData: FormClasses,
  defaultDataTouched: boolean,
  setDefaultDataTouched: SetState<boolean>,
  deleteAllRelatedClass?: (arg0: number) => void
) => {
  const { setValue, getValues } = useFormContext();
  const [selectMenuIsVisible, setSelectMenuIsVisible] = useState(false);
  const [classes, setClasses] = useState<ClassInitialState[]>([]);
  const [colors, setColors] = useState(['red', 'blue', 'green', 'black']);

  useEffect(() => {
    if (initialState) {
      setValue('initialState.initialClasses', selectedClasses);
    } else {
      setValue(`waves[${i}].spawn${k}`, {
        ...getValues(`waves[${i}].spawn${k}`),
        selectedOptions: classes,
      });
      !defaultDataTouched &&
        setClasses(
          (hydratedData?.waves[i] as any)[`spawn${k}`]?.selectedOptions
        );
    }
  }, [
    classes,
    defaultDataTouched,
    getValues,
    hydratedData?.waves,
    i,
    initialState,
    k,
    selectedClasses,
    setValue,
  ]);

  const selectOptionHandler = (selectedOption: {
    title: string;
    image: string;
    color: string;
    classId: number | null;
  }) => {
    setDefaultDataTouched(true);
    if (initialState) {
      setSelectMenuIsVisible(true);
      if (selectedClasses.length < 4) {
        setSelectedClasses((prevState: ClassInitialState[]) => [
          ...prevState,
          {
            classId:
              prevState.length === 0
                ? 1
                : (prevState[prevState.length - 1].classId as number) + 1,
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
    { title: 'Hunter', image: '/images/hunter.png', color: '', classId: null },
    {
      title: 'Samurai',
      image: '/images/samurai.png',
      color: '',
      classId: null,
    },
    {
      title: 'Assassin',
      image: '/images/assassin.png',
      color: '',
      classId: null,
    },
    { title: 'Ronin', image: '/images/ronin.png', color: '', classId: null },
  ];
  const deleteClassHandler = (classId: number) => {
    console.log(classId);
    if (initialState) {
      setDefaultDataTouched(false);

      deleteAllRelatedClass?.(classId);

      setSelectedClasses((prevState: ClassInitialState[]) => {
        return prevState.filter((item) => item.classId !== classId);
      });

      setColors((prevState) => {
        const deleteColor = selectedClasses?.filter(
          (item) => item.classId === classId
        )[0].color;
        prevState.unshift(deleteColor);
        return prevState;
      });
    } else {
      setClasses((prevState: ClassInitialState[]) => {
        return prevState.filter((item) => item.classId !== classId);
      });
      setColors((prevState) => {
        const deleteColor = selectedClasses?.filter(
          (item) => item.classId === classId
        )[0].color;
        prevState.unshift(deleteColor);
        return prevState;
      });
    }
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
    setClasses,
    // hydratedClasses,
    // hydratedInitial,
  };
};
