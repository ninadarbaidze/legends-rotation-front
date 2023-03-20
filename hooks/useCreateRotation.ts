import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { ClassInitialState, FormClasses } from 'types/global';

export const useCreateRotation = () => {
  const { data } = useQuery('all-rotations', () => {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/test`);
  });

  console.log(data?.data.initialState.author);
  const form = useForm<FormClasses>({
    defaultValues: {
      initialState: {
        author: '',
        date: '',
        version: '',
        weeklyModifier: '',
        initialClasses: [],
      },
      waves: [
        ...Array.from({ length: 16 }, (_, i) => {
          i + 1;
        })?.map(() => ({
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

  useEffect(() => {
    form.reset(data?.data);
  }, [data, form]);

  const options = ['beach', 'stable', 'farm'];
  const [dataChanges, setDataChanged] = useState(false);
  const { handleSubmit, getValues } = form;

  const onSubmit = (data: FormClasses) => {
    try {
      setDataChanged(true);
      console.log('submitted data', {
        initialState: data.initialState,
        waves: data.waves.map((wave) => ({
          ...wave,
          spawn1: {
            ...wave.spawn1,
            selectedOptions: wave.spawn1?.selectedOptions?.map(
              (spawnClass) => ({
                classId: spawnClass.classId,
              })
            ),
          },
          spawn2: {
            ...wave.spawn2,
            selectedOptions: wave.spawn2?.selectedOptions?.map(
              (spawnClass) => ({
                classId: spawnClass.classId,
              })
            ),
          },
          spawn3: {
            ...wave.spawn3,
            selectedOptions: wave.spawn3?.selectedOptions?.map(
              (spawnClass) => ({
                classId: spawnClass.classId,
              })
            ),
          },
        })),
      });
    } catch (err: any) {
      console.log(err);
    }
  };
  const [initialStates, setInitialStates] = useState<ClassInitialState[]>(
    getValues(`initialState.initialClasses`)
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
