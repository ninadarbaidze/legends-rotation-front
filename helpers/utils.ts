import { RefObject } from 'react';
import { FieldErrors } from 'react-hook-form';
import { FormClasses } from 'types/global';

export const getErrorMessage = (errors: FieldErrors, inputName: string) => {
  const splitName = inputName.split('.');
  let finalResult: any;
  for (const key of splitName) {
    if (!finalResult) {
      finalResult = errors?.[key];
    } else {
      finalResult = finalResult[key];
    }
  }

  return finalResult?.message ?? finalResult;
};

export const getRotationDefaultData = (): FormClasses => {
  return {
    id: undefined,
    initialState: {
      author: '',
      date: '',
      version: '',
      isPublic: false,
      weeklyModifier: '',
      initialClasses: [],
    },
    waves: [
      ...Array.from({ length: 16 }, (_, i) => {
        i + 1;
      })?.map(() => ({
        spawn1: {
          spawnLocation: '',
          actions: [],
          checkbox: [],
          selectedOptions: [],
        },
        spawn2: {
          spawnLocation: '',
          actions: [],
          checkbox: [],
          selectedOptions: [],
        },
        spawn3: {
          spawnLocation: '',
          actions: [],
          checkbox: [],
          selectedOptions: [],
        },
        comment: '',
      })),
    ],
  };
};

export const formatDate = (rawDate: string | Date, excludeDays?: boolean) => {
  const date = typeof rawDate === 'string' ? new Date(rawDate) : rawDate;
  const day = date?.getDate().toString();
  const month = date?.getMonth() + 1;
  const year = date?.getFullYear();

  return excludeDays
    ? `${month?.toString().length === 1 ? `0${month}` : month}.${year}`
    : `${day?.length === 1 ? `0${day}` : day}.${
        month?.toString().length === 1 ? `0${month}` : month
      }.${year}`;
};

export const getClassColor = (color: string) => {
  return `${
    color === 'red'
      ? 'bg-red2'
      : color === 'blue'
      ? 'bg-blue'
      : color === 'green'
      ? 'bg-green'
      : 'bg-violet-700'
  }`;
};

export const addClickAwayHandler = (
  triggerRef: RefObject<any>,
  dropdownRef: RefObject<any>,
  setIsOpen: (isOpen: boolean) => void,
  functionToExecuteAfterClose?: () => void,
  extraRefToNotCloseOn?: RefObject<any>
) => {
  const clickAwayHandler = (e: MouseEvent) => {
    if (
      triggerRef.current?.contains(e.target) ||
      extraRefToNotCloseOn?.current?.contains(e.target)
    ) {
      return;
    }
    if (dropdownRef.current && !dropdownRef?.current.contains(e.target)) {
      if ((e.composedPath()[0] as HTMLDivElement).id === 'clear-all-button') {
        (e.composedPath()[0] as HTMLDivElement).click &&
          (e.composedPath()[0] as HTMLDivElement).click();
      }
      setIsOpen(false);
      functionToExecuteAfterClose && functionToExecuteAfterClose();
      document.removeEventListener('mousedown', clickAwayHandler);
    }
  };
  document.addEventListener('mousedown', clickAwayHandler);
};
