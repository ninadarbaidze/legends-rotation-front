import { axios } from 'services';
import { FormClasses } from 'types/global';

export const createRotation = async (
  data: FormClasses,
  id: number | string
) => {
  const { data: response } = await axios.post(`/rotations`, data, {
    params: { id },
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

export const getWeeklyMaps = async () => {
  const response = await axios.get(`/weekly-maps`);
  return response;
};

export const getLocationsBasedOnWeeklyMap = async (weeklyMapId: number) => {
  const response = await axios.get(`/locations/${weeklyMapId}`);
  return response.data;
};

export const getAllWeeklyRotations = async () => {
  const response = await axios.get(`/all-rotations`);
  return response.data;
};
