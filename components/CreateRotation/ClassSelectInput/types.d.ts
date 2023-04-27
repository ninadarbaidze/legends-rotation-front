import { FormClasses, SetState } from 'types/global';

export type Props = {
  inputClass?: string;
  placeholder?: string;
  setInitialStates: SetState<selectOptionHandler[]>;
  initialStates: selectOptionHandler;
  initialState: boolean;
  setInitialStates: selectOptionHandler;
  i?: number;
  k?: number;
  labelName?: string;
  hydratedData: FormClasses;
  initialClassesSelection?: boolean | undefined;
  defaultDataTouched: boolean;
  setDefaultDataTouched: SetState<boolean>;
  deleteAllRelatedClass?: (
    classId: number,
    isRotationCreatedFromScratch: boolean
  ) => void | undefined;
  initialClassesIsDeleted?: boolean | undefined;
};
