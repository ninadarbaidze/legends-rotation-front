import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useClassSelectInput } from './useClassSelectInput';
import { Props } from './types';
import Image from 'next/image';
import { ClassInitialState } from 'types/global';

const ClassSelectInput: React.FC<Props> = (props) => {
  const {
    selectMenuIsVisible,
    setSelectMenuIsVisible,
    selectOptionHandler,
    options,
    deleteClassHandler,
    classes,
    getValues,
  } = useClassSelectInput(
    props.initialState,
    props.selectedClasses,
    props.setSelectedClasses
  );
  // console.log(getValues());

  return (
    <>
      {selectMenuIsVisible && (
        <div
          className='absolute top-0 left-0 w-screen h-screen z-20'
          onClick={() => setSelectMenuIsVisible(false)}
        />
      )}
      <div className='w-96 flex flex-col justify-start items-start '>
        <ul className='flex gap-2 mb-2'>
          {props.initialState
            ? props.selectedClasses.map((classes: ClassInitialState) => (
                <>
                  <li
                    className={`${
                      classes.color === 'red'
                        ? 'bg-red2'
                        : classes.color === 'blue'
                        ? 'bg-blue'
                        : classes.color === 'green'
                        ? 'bg-green'
                        : 'bg-black'
                    } relative w-8 h-8 rounded-full`}
                    key={classes.id}
                    onClick={() => deleteClassHandler(classes.id as number)}
                  >
                    <div className='absolute right-0 flex items-center justify-center h-2 w-2 rounded-full bg-slate-200 cursor-pointer'>
                      <p className='text-[7px]'> x </p>
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
              ))
            : classes.map((classes) => (
                <>
                  <li
                    className={`${
                      classes.color === 'red'
                        ? 'bg-red2'
                        : classes.color === 'blue'
                        ? 'bg-blue'
                        : classes.color === 'green'
                        ? 'bg-green'
                        : 'bg-black'
                    } relative w-8 h-8 rounded-full`}
                    key={classes.id}
                    onClick={() => deleteClassHandler(classes.id as number)}
                  >
                    <div className='absolute right-0 flex items-center justify-center h-2 w-2 rounded-full bg-slate-200 cursor-pointer'>
                      <p className='text-[7px]'> x </p>
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

        {true && (
          <div className='font-ubuntu'>
            <div
              className={`${props.inputClass} ${
                true ? 'text-grey-700' : 'text-grey-350'
              } relative w-40 pr-32 py-2 rounded-md border border-grey-300  font-extralight`}
              onClick={() => setSelectMenuIsVisible(!selectMenuIsVisible)}
            >
              <p className='pl-2 w-56'>Select classes</p>
              <div className=''>
                <ChevronDownIcon className='absolute top-2 right-2 text-grey-350 w-6' />
              </div>
            </div>

            {selectMenuIsVisible && (
              <ul
                className={`${props.inputClass} overflow-y-auto relative  w-40 py-2 rounded-md border border-grey-300 text-grey-350 font-extralight z-30`}
              >
                {props.initialState
                  ? options.map((option) => (
                      <li
                        key={option.title}
                        className='flex justify-between px-2 py-2 w-full text-grey-700 cursor-pointer hover:bg-red hover:text-white'
                        onClick={() => selectOptionHandler(option)}
                      >
                        <p>{option.title}</p>
                      </li>
                    ))
                  : getValues('initialState')
                      .filter((item: ClassInitialState) =>
                        classes.length > 0
                          ? classes.find((element) => item.id === element.id)
                            ? false
                            : true
                          : item
                      )
                      .map((option: ClassInitialState) => (
                        <li
                          key={option.title}
                          className='flex justify-between px-2 py-2 w-full text-grey-700 cursor-pointer hover:bg-red hover:text-white'
                          onClick={() => selectOptionHandler(option)}
                        >
                          <p>{option.title}</p>
                        </li>
                      ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ClassSelectInput;
