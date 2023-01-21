import { spawn } from 'child_process';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClassInitialState, FormClasses } from 'types/global';

export const useCreateRotation = () => {
  const form = useForm<FormClasses>({
    defaultValues: {
      initialState: {
        author: '',
        date: '',
        version: '',
        weeklyModifier: '',
        class: [],
      },
      spawns: [
        ...Array.from({ length: 16 }, (_, i) => {
          i + 1;
        }).map((obj) => ({
          spawn1: {
            spawnLocation: '',
            actions: [],
            checkbox: [],
            selectedOptions: [],
            extra: [],
            objective: '',
          },
          spawn2: {
            spawnLocation: '',
            actions: [],
            checkbox: [],
            selectedOptions: [],
            extra: [],
            objective: '',
          },
          spawn3: {
            spawnLocation: '',
            actions: [],
            checkbox: [],
            selectedOptions: [],
            extra: [],
            objective: '',
          },
        })),
      ],
    },
  });
  const options = ['beach', 'stable', 'farm'];
  const [dataChanges, setDataChanged] = useState(false);
  const { handleSubmit, getValues } = form;

  const onSubmit = (data) => {
    setDataChanged(true);
    console.log('submitted data', data);
  };
  const [initialStates, setInitialStates] = useState<ClassInitialState[]>(
    getValues(`initialState.class`)
  );
  const weeklyModifierOptions = [
    'stat. eff. immunity',
    'reduced healing',
    'longer revives',
    'strong foes',
    'tools shortage',
    'incapacitated',
  ];
  return {
    options,
    initialStates,
    setInitialStates,
    form,
    handleSubmit,
    onSubmit,
    weeklyModifierOptions,
    dataChanges,
  };
};
