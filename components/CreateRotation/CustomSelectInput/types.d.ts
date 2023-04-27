export type PropsTypes = {
  options: string[];
  inputClass?: string;
  placeholder?: string;
  selectedOption?: string;
  setSelectedOption?: (arg: string) => void;
  i?: number;
  k?: '1' | '2' | '3';
  isInitial: boolean;
  hydratedData?: FormClasses;
  spawnMapChanges?: boolean | undefined;
};
