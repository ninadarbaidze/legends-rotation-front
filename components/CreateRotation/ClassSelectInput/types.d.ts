import { SetState } from 'types/global';

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
  dataChanges?: boolean;
};
