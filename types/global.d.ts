export type SetState<T> = Dispatch<SetStateAction<T>>;

export type ClassInitialState = {
  classId: number | null;
  title: string;
  image: string;
  color: string;
};

export type FormClasses = {
  initialState: {
    author: string;
    initialClasses: ClassInitialState[];
    date: string;
    version: string;
    weeklyModifier: string;
  };
  waves: Wave[];
};

export const Wave = {
  spawn1: {
    spawnLocation: '',
    selectedOptions: [],
    actions: [],
    extra: [],
    objective: '',
  },
  spawn2: {
    spawnLocation: '',
    selectedOptions: [],
    actions: [],
    extra: [],
    objective: '',
  },
  spawn3: {
    spawnLocation: '',
    selectedOptions: [],
    actions: [],
    extra: [],
    objective: '',
  },
};
