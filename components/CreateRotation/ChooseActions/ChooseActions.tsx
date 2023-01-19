import React from 'react';
import Select from 'react-select';
import { Props } from './types';
import { useChooseActions } from './useChooseActions';

const ChooseActions: React.FC<Props> = (props) => {
  const { getValues, setValue, showActions, setShowActions, actionOptions } =
    useChooseActions();
  return (
    <div className='mt-2'>
      <div
        className={`${
          !showActions ? 'hidden' : 'flex'
        } flex flex-col gap-2 justify-start items-start`}
      >
        <div className='flex items-center gap-2'>
          <Select
            closeMenuOnSelect={true}
            options={actionOptions}
            isMulti={true}
            onChange={(e) =>
              setValue(`spawns[${props.i}].spawn${Number(props.k)}`, {
                ...getValues(`spawns[${props.i}].spawn${Number(props.k)}`),
                actions: e,
              })
            }
            placeholder='Select actions...'
          />
          <p
            className='text-red2 cursor-pointer'
            onClick={() => setShowActions(false)}
          >
            x
          </p>
        </div>
      </div>
      <p
        onClick={() => setShowActions(true)}
        className={`${
          !showActions ? 'flex' : 'hidden'
        }  text-sky-500 cursor-pointer text-sm`}
      >
        add actions
      </p>
    </div>
  );
};

export default ChooseActions;
