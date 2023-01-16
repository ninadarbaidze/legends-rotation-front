export type SetState<T> = Dispatch<SetStateAction<T>>;

export type ClassInitialState = {
  id: number | null;
  title: string;
  image: string;
  color: string;
};

export type FormClasses = {
  initialState: ClassInitialState[];
  selectedClasses: ClassInitialState[];
};
