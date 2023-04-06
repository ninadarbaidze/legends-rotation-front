export type PropsTypes = {
  options: string[];
  inputClass?: string;
  placeholder?: string;
  selectedOption?: string;
  setSelectedOption?: (arg: string) => void;
  i?: number;
  k?: number;
  isInitial: boolean;
  hydratedData?: FormClasses;
  spawnMapChanges?: boolean | undefined;
};
