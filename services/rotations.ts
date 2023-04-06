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

export const getWeeklyMaps = async () => {
  const response = await axios.get(`/weekly-maps`);
  return response;
};

export const getLocationsBasedOnWeeklyMap = async (weeklyMapId: number) => {
  const response = await axios.get(`/locations/${weeklyMapId}`);
  return response.data;
};
