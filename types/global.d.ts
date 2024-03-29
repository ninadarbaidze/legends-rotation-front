export type SetState<T> = Dispatch<SetStateAction<T>>;

export type ClassInitialState = {
  id?: number;
  classId: number | null;
  title: string;
  image: string;
  color: string;
};

export type FormClasses = {
  id?: number | undefined;
  initialState: {
    id?: number;
    author: string;
    initialClasses: ClassInitialState[];
    date: string;
    version: string;
    weeklyModifier: string;
    isPublic: boolean;
  };
  waves: Wave[];
  weeklyMap?:
    | {
        value: number | null;
        label: string;
        mapId: number | null;
        id?: number;
        title?: string;
      }
    | undefined;
  weeklyMapId?: number;
};

export type Wave = {
  id?: number;
  spawn1: {
    id?: number;
    spawnLocation: string;
    selectedOptions: ClassInitialState[];
    actions: { value: number }[];
  };
  spawn2: {
    id?: number;
    spawnLocation: string;
    selectedOptions: ClassInitialState[];
    actions: { value: number }[];
  };
  spawn3: {
    id?: number;
    spawnLocation: string;
    selectedOptions: ClassInitialState[];
    actions: { value: number }[];
  };
  objective?:
    | {
        name: number;
      }
    | number;
  comment?: string;
};
