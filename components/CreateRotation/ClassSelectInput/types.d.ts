import { SetState } from 'types/global';

export type Props = {
  inputClass?: string;
  placeholder?: string;
  setSelectedClasses: SetState<selectOptionHandler[]>;
  initialState: selectOptionHandler;
  selectedClasses: selectOptionHandler;
};
