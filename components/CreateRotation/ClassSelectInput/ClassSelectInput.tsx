import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useClassSelectInput } from './useClassSelectInput';
import { Props } from './types';
import Image from 'next/image';
import { ClassInitialState } from 'types/global';
import { getClassColor } from 'helpers';

const ClassSelectInput: React.FC<Props> = (props) => {
  const {
    selectMenuIsVisible,
    selectOptionHandler,
    options,
    deleteClassHandler,
    classes,
    openClassesHandler,
    triggerRef,
    dropdownRef,
  } = useClassSelectInput(
    props.initialState,
    props.initialStates,
    props.setInitialStates,
    props.i as number,
    props.k as number,
    props.hydratedData,
    props.defaultDataTouched,
    props.setDefaultDataTouched,
    props.initialClassesIsDeleted,
    props.deleteAllRelatedClass
  );

  return (
    <>
      <div className=' flex flex-col justify-end items-start font-ubuntu h-16'>
        <p className=''>{props.labelName}</p>
        <ul className='flex gap-2 mb-1'>
          {props.initialState
            ? props.initialStates?.map((classes: ClassInitialState) => (
                <>
                  <li
                    className={`${
                      classes.color === 'red'
                        ? 'bg-red2'
                        : classes.color === 'blue'
                        ? 'bg-blue'
                        : classes.color === 'green'
                        ? 'bg-green'
                        : 'bg-violet-700'
                    } relative w-8 h-8 rounded-full`}
                    key={classes.classId}
                    onClick={() =>
                      deleteClassHandler(classes.classId as number)
                    }
                  >
                    {props.initialState && (
                      <div className='absolute right-0 flex items-center justify-center h-2 w-2 rounded-full bg-slate-200 cursor-pointer'>
                        <p className='text-[7px] dark:text-black'> x </p>
                      </div>
                    )}

                    <div className='p-[6px]'>
                      <Image
                        src={`${classes.image}`}
                        alt='class'
                        width={25}
                        height={25}
                      />
                    </div>
                  </li>
                </>
              ))
            : classes?.map((classes, i) => (
                <>
                  <li
                    className={`${getClassColor(
                      classes.color
                    )} relative w-8 h-8 rounded-full`}
                    key={`${classes.classId}${i}`}
                    onClick={() =>
                      deleteClassHandler(classes.classId as number)
                    }
                  >
                    <div className='absolute right-0 flex items-center justify-center h-2 w-2 rounded-full bg-slate-200 cursor-pointer'>
                      <p className='text-[7px] dark:text-black'> x </p>
                    </div>
                    <div className='p-[6px]'>
                      <Image
                        src={`${classes.image}`}
                        alt='class'
                        width={25}
                        height={25}
                      />
                    </div>
                  </li>
                </>
              ))}
        </ul>

        <div className='font-ubuntu'>
          <div
            className={`${props.inputClass} ${
              true ? 'text-grey-700' : 'text-grey-350'
            } relative  w-40 pr-18 py-[0.35rem] rounded-md border border-grey-300  font-extralight`}
            onClick={() => openClassesHandler()}
            ref={triggerRef}
          >
            <p className='pl-2 text-grey-350 cursor-pointer'>Select classes</p>
            <div className=''>
              <ChevronDownIcon className='absolute top-2 right-2 text-grey-350 w-6' />
            </div>
          </div>

          {selectMenuIsVisible && (
            <ul
              className={`${props.inputClass} overflow-y-auto absolute z-30 bg-whit dark:bg-dark-100  bg-white w-40 py-2 rounded-md border border-grey-300 text-grey-350 font-extralight`}
              ref={dropdownRef}
            >
              {props.initialState ? (
                options?.map((option, i) => (
                  <li
                    key={option.classId! + i}
                    className='flex justify-between px-2 py-2 w-full text-grey-700 dark:text-white cursor-pointer hover:bg-red hover:text-white'
                    onClick={() => selectOptionHandler(option)}
                  >
                    <p>{option.title}</p>
                  </li>
                ))
              ) : props.initialStates.length > 0 ? (
                props.initialStates
                  .filter((item: ClassInitialState) =>
                    classes.length > 0
                      ? classes.find(
                          (element) => item.classId === element.classId
                        )
                        ? false
                        : true
                      : item
                  )
                  ?.map((option: ClassInitialState) => (
                    <li
                      key={option.classId}
                      className='flex justify-between items-center px-2 py-2 w-full text-grey-700 dark:text-white cursor-pointer hover:bg-red hover:text-white'
                      onClick={() => selectOptionHandler(option)}
                    >
                      <p>{option.title}</p>
                      <div
                        className={`${getClassColor(
                          option.color
                        )} w-2 h-2 rounded-full border border-white`}
                      />
                    </li>
                  ))
              ) : (
                <li className='text-sm text-gray-400 flex items-center justify-center'>
                  empty
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ClassSelectInput;
