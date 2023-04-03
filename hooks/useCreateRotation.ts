import { getRotationDefaultData } from 'helpers';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createRotation } from 'services';
import { ClassInitialState, FormClasses } from 'types/global';
import { useMutateHook } from './useMutateHook';

export const useCreateRotation = (rotationData: FormClasses) => {
  console.log(rotationData);
  const router = useRouter();
  const rotationsExist = !!router.query.rotationId;

  const [defaultDataTouched, setDefaultDataTouched] = useState(rotationsExist);
  const [hydratedData, setData] = useState(rotationData);
  const [initialClassesSelection, setInitialClassesSelection] = useState(
    !rotationsExist
  );
  const [initialClassesIsDeleted, setInitialClassesIsDeleted] = useState(false);
  // const [newRotationId, setNewRotationId] = useState<number | null>(null);

  const successMutationHandler = (response: {
    message: string;
    rotationId: number;
  }) => {
    // setNewRotationId(response.rotationId);
    router.push(`/rotation/${response.rotationId}`);
  };

  const { mutate } = useMutateHook(
    () => createRotation(form.getValues()),
    'create-rotation',
    successMutationHandler
  );

  const form = useForm<FormClasses>({
    defaultValues: useMemo(() => getRotationDefaultData(), []),
  });
  const [initialStates, setInitialStates] = useState<ClassInitialState[]>([]);

  useEffect(() => {
    if (rotationsExist) {
      form.reset(rotationData);
      setDefaultDataTouched(false);
      setInitialStates(rotationData.initialState.initialClasses);
      setData(rotationData);
    }
  }, [rotationData, form, rotationsExist, router.query.rotationId]);

  const options = ['beach', 'stable', 'farm'];
  const [dataChanges, setDataChanged] = useState(false);

  const deleteAllRelatedClass = (
    classId: number,
    isRotationCreatedFromScratch: boolean
  ) => {
    if (isRotationCreatedFromScratch) {
      setData({
        ...form.getValues(),
        waves: form.getValues()?.waves.map((wave) => ({
          ...wave,
          spawn1: {
            ...wave.spawn1,
            selectedOptions: wave.spawn1?.selectedOptions.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
          spawn2: {
            ...wave.spawn2,
            selectedOptions: wave.spawn2?.selectedOptions.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
          spawn3: {
            ...wave.spawn3,
            selectedOptions: wave.spawn3?.selectedOptions.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
        })),
      });
      setInitialClassesIsDeleted(!initialClassesIsDeleted);
    } else {
      setData(form.getValues());
      setInitialClassesSelection(false);
      setData({
        ...form.getValues(),
        waves: form.getValues()?.waves.map((wave) => ({
          ...wave,
          spawn1: {
            ...wave.spawn1,
            selectedOptions: wave.spawn1?.selectedOptions?.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
          spawn2: {
            ...wave.spawn2,
            selectedOptions: wave.spawn2?.selectedOptions?.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
          spawn3: {
            ...wave.spawn3,
            selectedOptions: wave.spawn3?.selectedOptions?.filter(
              (spawnClass) => spawnClass.classId !== classId
            ),
          },
        })),
      });
    }
  };
  console.log('sds', form.getValues());

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
    initialClassesSelection,
    rotationsExist,
    initialClassesIsDeleted,
  };
};
