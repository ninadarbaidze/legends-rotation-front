import { useQueryHook } from 'hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getRotationByRotationId } from 'services';
import { FormClasses } from 'types/global';
// import { dummyData } from 'utils';

export const useRotation = () => {
  const router = useRouter();
  const [rotation, setRotation] = useState<FormClasses>();

  const { data } = useQueryHook(
    getRotationByRotationId,
    'get-rotation-by-id',
    +router?.query.id!
  );

  useEffect(() => {
    setRotation(data);
  }, [data]);

  return { rotation, router };
};
