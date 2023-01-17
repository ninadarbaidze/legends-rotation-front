import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useCustomSelectInput } from './useCustomSelectInput';
import { PropsTypes } from './types';

const CustomSelectInput: React.FC<PropsTypes> = (props) => {
  const {
    selectMenuIsVisible,
    setSelectMenuIsVisible,
    selectOptionHandler,
    selectedOption,
  } = useCustomSelectInput(props.i, props.k);

  return (
    <>
      {selectMenuIsVisible && (
        <div
          className='absolute top-0 left-0 w-screen h-screen z-20'
          onClick={() => setSelectMenuIsVisible(false)}
        />
      )}

      <div className='font-ubuntu ml-24'>
        <div
          className={`${props.inputClass} ${
            selectedOption ? 'text-grey-700' : 'text-grey-350'
          } relative w-56 pr-32 py-2 rounded-md border border-grey-300  font-extralight`}
          onClick={() => setSelectMenuIsVisible(!selectMenuIsVisible)}
        >
          <p className='pl-2'>{`${
            selectedOption
              ? selectedOption
              : `Select ${props.placeholder ? props.placeholder : ''}`
          }`}</p>
          <div className=''>
            <ChevronDownIcon className='absolute top-2 right-2 text-grey-350 w-6' />
          </div>
        </div>
        {selectMenuIsVisible && (
          <ul
            className={`${props.inputClass} overflow-y-auto relative w-56 py-2 rounded-md border border-grey-300 text-grey-350 font-extralight z-30`}
          >
            {props.options.map((option) => (
              <li
                key={option}
                className='flex justify-between px-2 py-2 w-full text-grey-700 cursor-pointer hover:bg-red hover:text-white'
                onClick={() => selectOptionHandler(option)}
              >
                <p>{option}</p>
                {selectedOption === option && <CheckIcon className='w-4' />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomSelectInput;
