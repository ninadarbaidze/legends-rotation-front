import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createRotation } from 'services';
import { ClassInitialState, FormClasses } from 'types/global';
import { useMutateHook } from './useMutateHook';

export const useCreateRotation = (rotationData: FormClasses) => {
  const router = useRouter();
  const rotationsExist = !!router.query.token;

  const { mutate } = useMutateHook(
    () => createRotation(rotationData),
    'create-rotation'
  );

  const [defaultDataTouched, setDefaultDataTouched] = useState(rotationsExist);

  const [hydratedData, setData] = useState(rotationData);
  const [initialClassesSelection, setInitialClassesSelection] = useState(
    !rotationsExist
  );

  const deleteAllRelatedClass = (classId: number) => {
    setData((prev) => {
      return {
        ...prev,
        waves: prev?.waves.map((wave) => ({
          ...wave,
          spawn1: {
            ...wave.spawn1,
            selectedOptions: wave.spawn1?.selectedOptions?.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
          spawn2: {
            ...wave.spawn1,
            selectedOptions: wave.spawn1?.selectedOptions?.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
          spawn3: {
            ...wave.spawn1,
            selectedOptions: wave.spawn1?.selectedOptions?.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
        })),
      };
    });
  };

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
            objective: '',
          },
          spawn2: {
            spawnLocation: '',
            actions: [],
            checkbox: [],
            selectedOptions: [],
            objective: '',
          },
          spawn3: {
            spawnLocation: '',
            actions: [],
            checkbox: [],
            selectedOptions: [],
            objective: '',
          },
        })),
      ],
    },
  });
  const [initialStates, setInitialStates] = useState<ClassInitialState[]>([]);

  useEffect(() => {
    if (rotationsExist) {
      form.reset(rotationData);
      setDefaultDataTouched(false);
      setInitialStates(rotationData.initialState.initialClasses);
      setData(rotationData);
    }
  }, [rotationData, form, rotationsExist, router.query.token]);

  const options = ['beach', 'stable', 'farm'];
  const [dataChanges, setDataChanged] = useState(false);
  const { handleSubmit } = form;

  const onSubmit = (data: FormClasses) => {
    try {
      setDataChanged(true);
      const formData = {
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
      };

      mutate(formData);

      console.log('submitted data', formData);
    } catch (err: any) {
      console.log(err);
    }
  };

  const enableClassChangeHandler = () => {
    setInitialClassesSelection(true);
  };

  const cancelClassChangeHandler = () => {
    setInitialClassesSelection(false);
  };
  const submitClassChangeHandler = () => {
    setData(form.getValues());
    setInitialClassesSelection(false);
  };

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
    hydratedData,
    defaultDataTouched,
    setDefaultDataTouched,
    deleteAllRelatedClass,
    enableClassChangeHandler,
    cancelClassChangeHandler,
    submitClassChangeHandler,
    initialClassesSelection,
    rotationsExist,
  };
};
