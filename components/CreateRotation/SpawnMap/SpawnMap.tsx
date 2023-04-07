import { getClassColor } from 'helpers';
import React from 'react';
import { Props } from './types';
import Image from 'next/image';
import { actionOptions, objectiveOptions } from 'utils';

const SpawnMap: React.FC<Props> = (props) => {
  const { wave, spawnNum } = props;
  return (
    <div
      id={`${[spawnNum]}-${wave.id}`}
      className={`flex flex-col items-start w-[33%] ${
        spawnNum !== 'spawn3' && 'border-r dark:border-zinc-600'
      }`}
    >
      <p className='text-xs'>{wave[spawnNum].spawnLocation}</p>
      <div
        className={`${
          wave[spawnNum].selectedOptions.length >= 3
            ? 'flex-col items-start'
            : 'flex items-center'
        } gap-[1px] `}
      >
        <div className='flex items-start'>
          {wave[spawnNum].selectedOptions.map((selectedClasses) => (
            <div
              className={`${getClassColor(
                selectedClasses.color
              )} relative w-[15px] h-[15px] rounded-full`}
              key={selectedClasses.id}
            >
              <div className='p-[2px]'>
                <Image
                  src={selectedClasses.image}
                  alt='class'
                  width={25}
                  height={25}
                />
              </div>
            </div>
          ))}
        </div>
        <p className='text-sm'>
          {
            actionOptions.find(
              (item) => item.value === wave[spawnNum]?.actions[0]?.value
            )?.emoji
          }
        </p>
      </div>
      {spawnNum === 'spawn1' && (
        <p className='text-[11px] text-zinc-500'>
          {
            objectiveOptions.find(
              (action) => action.value === wave.objective?.name
            )?.shortened
          }
        </p>
      )}
    </div>
  );
};

export default SpawnMap;
