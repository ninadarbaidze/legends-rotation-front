import { SetState } from 'types/global';

export type Props = {
  i: number;
  initialStates: ClassInitialState[];
  objective: boolean;
  setInitialStates: SetState<ClassInitialState[]>;
  dataChanges: boolean;
};
