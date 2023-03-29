import { axios } from 'services';
import { FormClasses } from 'types/global';

export const createRotation = async (data: FormClasses) => {
  const { data: response } = await axios.post(`/rotations/${data.id}`, data);
  return response.data;
};
export const getRotationByToken = async (token: string | boolean) => {
  let response;
  if (token) {
    response = await axios.get(`/rotations/${token}`);
    return response.data;
  }
};
