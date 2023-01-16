import { SetState } from 'types/global';

export type Props = {
  // options: string[];
  inputClass?: string;
  placeholder?: string;
  setSelectedClasses: SetState<selectOptionHandler[]>;
  setInitialClassState: SetState<selectOptionHandler[]>;
  initialState: selectOptionHandler;
  selectedClasses: selectOptionHandler;
};
