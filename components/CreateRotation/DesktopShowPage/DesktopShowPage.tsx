import { getClassColor, formatDate } from 'helpers';
import React from 'react';
import Image from 'next/image';
import { SwitchButton } from 'components/shared';
import router from 'next/router';
import { SpawnMap } from '../SpawnMap';
import { Props } from './types';
import { objectiveOptions } from 'utils';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

const DesktopShowPage: React.FC<Props> = (props) => {
  return (
    <div className='font-ubuntu sm:px-24 lg:px-[22rem] py-3 dark:bg-dark-200 h-full'>
      <header className='pb-6'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>
            {props.rotation?.initialState?.author}
          </h2>
          <div>
            <div className={`flex  flex-col items-start `}>
              <div className='flex items-center gap-2 justify-center '>
                <div className='flex items-center gap-1 pt-1'>
                  {props.rotation?.initialState.initialClasses.map(
                    (selectedClasses) => (
                      <div
                        className={`${getClassColor(
                          selectedClasses.color
                        )} relative pl-[2px] w-7 h-7 rounded-full`}
                        key={selectedClasses.id}
                      >
                        <div className=''>
                          <Image
                            src={selectedClasses.image}
                            alt='class'
                            width={25}
                            height={25}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
                |
                <div className='pt-2'>
                  <SwitchButton />
                </div>
              </div>
            </div>
          </div>
          <h3 className='text-base'>
            version:{' '}
            <span className='font-bold text-xl'>
              {props.rotation?.initialState?.version}
            </span>
          </h3>
        </div>
        <div className='flex justify-between text-zinc-400 text-base'>
          <p>{props.rotation?.initialState?.weeklyModifier}</p>
          <p>
            {props.rotation?.initialState?.date &&
              formatDate(props.rotation?.initialState?.date as string)}
          </p>
        </div>
      </header>
      <div>
        <ul className='flex flex-col'>
          {props.rotation?.waves?.map((wave, i) => (
            <li
              key={wave.id}
              className='flex items-start gap-[3px] border-b dark:border-zinc-600 '
            >
              <div className='flex flex-col w-full'>
                <div className='flex gap-1'>
                  <p className='text-[11px] sm:text-sm text-zinc-500'>
                    {
                      objectiveOptions.find(
                        (action) => action.value === wave.objective
                      )?.shortened
                    }
                  </p>
                  {wave.comment && (
                    <div className='items-center hidden sm:flex gap-[1px]'>
                      <ChatBubbleBottomCenterTextIcon className='stroke-black text-white w-3' />
                      <p className='text-[11px] sm:text-sm text-zinc-500 truncate'>
                        {wave.comment}
                      </p>
                    </div>
                  )}
                </div>
                <div className='flex'>
                  <h3
                    className={`${
                      i <= 9 ? 'pr-1' : ''
                    } text-xs pt-[2px] sm:text-sm`}
                  >{`${i}.`}</h3>
                  <SpawnMap wave={wave} spawnNum={'spawn1'} />
                  <SpawnMap wave={wave} spawnNum={'spawn2'} />
                  <SpawnMap wave={wave} spawnNum={'spawn3'} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button
        className='mt-8 text-sm rounded-md border border-zinc-400 px-2 py-1'
        onClick={() =>
          router.push(`/create-rotation?rotationId=${props.rotation?.id}`)
        }
      >
        Edit rotation
      </button>
    </div>
  );
};

export default DesktopShowPage;
