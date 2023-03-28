import { useFormContext } from 'react-hook-form';

export const useSpawnComponent = () => {
  const objectiveOptions = [
    { value: 1, label: '20 ranged kills' },
    { value: 2, label: '25 head shots' },
    { value: 3, label: '10 critical hits' },
    { value: 4, label: '5 assassinations from above' },
    { value: 5, label: '20 outside kills' },
    { value: 6, label: '25 inside kills' },
    { value: 7, label: '5 ghost weapon kills' },
    { value: 8, label: '15 perfect parry counter attacks' },
    { value: 9, label: '15 fire damage kills' },
  ];

  const { setValue, getValues } = useFormContext();
  return { objectiveOptions, setValue, getValues };
};
