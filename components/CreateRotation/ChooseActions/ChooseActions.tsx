import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { actionOptions } from 'utils';
import { Props } from './types';
import { useChooseActions } from './useChooseActions';

const ChooseActions: React.FC<Props> = (props) => {
  const { showActions, setShowActions, isActionsExists } = useChooseActions(
    props.i,
    props.k
  );
  return (
    <div className='mt-2'>
      <div
        className={`${
          !showActions && !isActionsExists
            ? 'hidden'
            : showActions || isActionsExists
            ? 'flex'
            : 'hidden'
        } flex flex-col gap-2 justify-start items-start`}
      >
        <div className='flex items-center gap-2'>
          <Controller
            name={`waves[${props.i}].spawn${props.k}.actions`}
            rules={{ required: false }}
            render={({ field: { onChange, value, name, ref } }) => (
              <Select
                isMulti={true}
                ref={ref}
                name={name}
                value={value.map((item: { value: number; label: string }) =>
                  actionOptions.find((action) => action.value === item.value)
                )}
                options={actionOptions}
                onChange={onChange}
                isSearchable={true}
                placeholder='Select actions...'
              />
            )}
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
          !showActions && !isActionsExists
            ? 'flex'
            : isActionsExists || showActions
            ? 'hidden'
            : 'flex'
        }  text-sky-500 cursor-pointer text-sm`}
      >
        add actions
      </p>
    </div>
  );
};

export default ChooseActions;
