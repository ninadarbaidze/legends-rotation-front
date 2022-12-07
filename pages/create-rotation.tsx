import { ClassSelectInput, CustomSelectInput } from 'components';
import { SelectInput } from 'components';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCreateRotation } from 'hooks';

export default function CreateRotation() {
  const { options, setValue, getValues, setInitialClassState } =
    useCreateRotation();

  return (
    <>
      <Head>
        <title className=''>Create rotation - Ghost of Tsushima</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=''>
        <h1 className='flex items-center justify-center font-teko text-4xl mt-12'>
          Create rotation
        </h1>
        <div className='flex flex-col gap-12 ml-48'>
          <div>
            {/* <CustomSelectInput options={options} />
            <SelectInput /> */}
          </div>
          {/* <div>
            <Image
              src={'/images/hunter.png'}
              alt='class'
              width={100}
              height={100}
            />
          </div> */}
          <ClassSelectInput
            setValue={setValue}
            getValues={getValues}
            setInitialClassState={setInitialClassState}
            initialState={true}
          />
        </div>
      </div>
    </>
  );
}
