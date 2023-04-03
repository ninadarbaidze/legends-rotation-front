import { axios } from 'services';
import { FormClasses } from 'types/global';

export const createRotation = async (data: FormClasses) => {
  const { data: response } = await axios.post(`/rotations`, data, {
    params: { id: data?.id },
  });
  return response;
};
export const getRotationByRotationId = async (rotationId: string | boolean) => {
  let response;
  if (rotationId) {
    response = await axios.get(`/rotations/${rotationId}`);
    return response.data;
  }
};
