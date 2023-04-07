import { getClassColor, getMonthAndYear } from 'helpers';
import { useRotation } from 'hooks';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import { SpawnMap, SwitchButton } from 'components';

const Rotation = () => {
  const { rotation, router } = useRotation();
  return (
    <>
      <Head>
        <title>Rotation by {rotation?.initialState?.author}</title>
      </Head>
      <div className='font-ubuntu p-[4px] pt-0 dark:bg-dark-200'>
        <header>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl font-bold'>
              {rotation?.initialState?.author}
            </h2>
            <div>
              <div className={`flex flex-col items-start `}>
                <div className='flex items-start gap-2 pt-[1px] justify-center '>
                  <div className='flex items-start pt-1'>
                    {rotation?.initialState.initialClasses.map(
                      (selectedClasses) => (
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
                      )
                    )}
                  </div>
                  |
                  <SwitchButton />
                </div>
              </div>
            </div>
            <h3 className='text-sm'>
              version:
              <span className='font-bold text-base'>
                {rotation?.initialState?.version}
              </span>
            </h3>
          </div>
          <div className='flex justify-between text-zinc-400 text-[10px]'>
            <p>{rotation?.initialState?.weeklyModifier}</p>
            <p>
              {rotation?.initialState?.date &&
                getMonthAndYear(rotation?.initialState?.date as string)}
            </p>
          </div>
        </header>
        <div>
          <ul className='flex flex-col'>
            {rotation?.waves?.map((wave, i) => (
              <li
                key={wave.id}
                className='flex gap-[3px] border-b dark:border-zinc-600 py-[px]'
              >
                <h3 className={`${i <= 9 ? 'pr-1' : ''} text-xs`}>{`${i}.`}</h3>
                <SpawnMap wave={wave} spawnNum={'spawn1'} />
                <SpawnMap wave={wave} spawnNum={'spawn2'} />
                <SpawnMap wave={wave} spawnNum={'spawn3'} />
              </li>
            ))}
          </ul>
        </div>
        <button
          className='mt-8 text-sm rounded-md border border-zinc-400 px-2 py-1'
          onClick={() =>
            router.push(`/create-rotation?rotationId=${rotation?.id}`)
          }
        >
          Edit rotation
        </button>
      </div>
    </>
  );
};

export default Rotation;
