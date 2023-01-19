export type SetState<T> = Dispatch<SetStateAction<T>>;

export type ClassInitialState = {
  id: number | null;
  title: string;
  image: string;
  color: string;
};

export type FormClasses = {
  initialState: ClassInitialState[];
  spawns: {
    spawnLocation: string;
    actions: string[];
    checkbox: string[];
    selectedOptions: string[];
    extra: string[];
    objective: string;
  }[];
  [];
};

export const spawns = [
  {
    spawn1: {
      spawnLocation: '',
      selectedOptions: [],
      actions: [],
      extra: [],
      objective: [],
    },
    spawn2: {
      spawnLocation: '',
      selectedOptions: [],
      actions: [],
      extra: [],
      objective: [],
    },
    spawn3: {
      spawnLocation: '',
      selectedOptions: [],
      actions: [],
      extra: [],
      objective: [],
    },
  },
];
