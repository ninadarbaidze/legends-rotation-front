import { useFormContext } from 'react-hook-form';

export const useSpawnComponent = () => {
  const objectiveOptions = [
    { value: '20_ranged', label: '20 ranged kills' },
    { value: '25_headshot', label: '25 head shots' },
    { value: '10_critical', label: '10 critical hits' },
    { value: '5_assassinations', label: '5 assassinations from above' },
    { value: '20_outside', label: '20 outside kills' },
    { value: '25_inside', label: '25 inside kills' },
    { value: '5_ghost', label: '5 ghost weapon kills' },
    { value: '15_perfect_perry', label: '15 perfect parry counter attacks' },
    { value: '15_fire_damage', label: '15 fire damage kills' },
  ];

  const { setValue, getValues } = useFormContext();
  return { objectiveOptions, setValue, getValues };
};
