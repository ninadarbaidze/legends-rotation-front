import { FieldErrors } from 'react-hook-form';

export const getErrorMessage = (errors: FieldErrors, inputName: string) => {
  const splitName = inputName.split('.');
  let finalResult: any;
  for (const key of splitName) {
    if (!finalResult) {
      finalResult = errors?.[key];
    } else {
      finalResult = finalResult[key];
    }
  }

  return finalResult?.message ?? finalResult;
};
