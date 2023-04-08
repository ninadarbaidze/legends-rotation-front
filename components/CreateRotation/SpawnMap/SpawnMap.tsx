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
      className={`flex flex-col sm:flex-row sm:items-center sm:gap-2  items-start w-[33%] sm:pb-2 ${
        spawnNum !== 'spawn3' && 'border-r dark:border-zinc-600'
      }`}
    >
      <p className='text-xs sm:text-sm'>{wave[spawnNum].spawnLocation}</p>
      <div
        className={`${
          wave[spawnNum].selectedOptions.length >= 3
            ? 'flex-col items-start'
            : 'flex items-center'
        } gap-[1px] sm:gap-2`}
      >
        <div className='flex items-start'>
          {wave[spawnNum].selectedOptions.map((selectedClasses) => (
            <div
              className={`${getClassColor(
                selectedClasses.color
              )} relative w-[15px] h-[15px] sm:w-6 sm:h-6 rounded-full`}
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
        <p className='text-sm sm:text-base'>
          {
            actionOptions.find(
              (item) => item.value === wave[spawnNum]?.actions[0]?.value
            )?.emoji
          }
        </p>
      </div>
      {spawnNum === 'spawn1' && (
        <p className='text-[11px] sm:hidden text-zinc-500'>
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