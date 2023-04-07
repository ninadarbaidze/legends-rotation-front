import {
  ClassSelectInput,
  CustomSelectInput,
  SpawnComponent,
  SwitchButton,
} from 'components';

import Head from 'next/head';
import { useCreateRotation } from 'hooks';
import { Controller, FormProvider } from 'react-hook-form';
import { NormalInput } from 'components';
import { FormClasses } from 'types/global';
import { GetServerSideProps } from 'next';
import { getRotationByRotationId, getWeeklyMaps } from 'services';
import Select from 'react-select';

export default function CreateRotation(props: {
  data: FormClasses;
  spawnMaps: { id: number; title: string; mapId: number }[];
}) {
  const {
    initialStates,
    setInitialStates,
    form,
    handleSubmit,
    onSubmit,
    weeklyModifierOptions,
    dataChanges,
    hydratedData,
    defaultDataTouched,
    deleteAllRelatedClass,
    setDefaultDataTouched,
    initialClassesSelection,
    rotationsExist,
    initialClassesIsDeleted,
    getSpawnLocations,
    spawnLocations,
    setSpawnMapChanges,
    spawnMapChanges,
  } = useCreateRotation(props.data);

  return (
    <>
      <Head>
        <title className=''>
          {' '}
          {rotationsExist
            ? 'Edit rotation - Ghost of Tsushima'
            : 'Create rotation - Ghost of Tsushima'}
        </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FormProvider {...form}>
        <form className='dark:bg-dark-200' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-4 pb-2 px-2 2xl:px-24'>
            <div className='flex gap-2 justify-center items-center'>
              <h1 className='flex items-center justify-center font-teko text-4xl mt-4'>
                {rotationsExist ? 'Edit rotation' : 'Create rotation'}
              </h1>
              <div className='p-1 mt-3 rounded-full'>
                <SwitchButton />
              </div>
            </div>
            <div className='flex xs:flex-col lg:flex-row gap-2 lg:items-center'>
              <div>
                <Controller
                  name={`weeklyMap`}
                  rules={{ required: '*required' }}
                  control={form.control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      closeMenuOnSelect={true}
                      options={props.spawnMaps.map((item) => ({
                        value: item.mapId,
                        label: item.title,
                      }))}
                      isMulti={false}
                      onChange={(e) => {
                        console.log(typeof e?.value);
                        getSpawnLocations(e?.value as number);
                        onChange(e);
                        setSpawnMapChanges((prev) => !prev);
                      }}
                      // styles={currentTheme === 'dark' && customStyles}
                      value={
                        value
                          ? props.spawnMaps
                              .map((item) => ({
                                value: item.mapId,
                                label: item.title,
                              }))
                              .find((item) => item.value === value.id)
                          : value
                      }
                      placeholder='select map..'
                      className={`xl:w-56 my-react-select-container ${
                        form.formState.errors.weeklyMap &&
                        'border-red2 border rounded-md'
                      }`}
                      classNamePrefix='my-react-select'
                    />
                  )}
                />
              </div>
              <div className='flex flex-col text-sm relative'>
                <div className='flex'>
                  <p>
                    Show in{' '}
                    <a
                      href={`/rotations`}
                      target='_blank'
                      className='underline'
                      rel='noreferrer'
                    >
                      All rotations{' '}
                    </a>
                    page?
                  </p>
                </div>
                <div className='flex gap-3 py-[0.35rem]'>
                  <label htmlFor='yes' className='flex gap-1'>
                    <input
                      {...form.register('initialState.isPublic')}
                      type='radio'
                      value='yes'
                      id='yes'
                    />
                    yes
                  </label>
                  <label htmlFor='no' className='flex gap-1'>
                    <input
                      {...form.register('initialState.isPublic')}
                      type='radio'
                      value='no'
                      id='no'
                      defaultChecked={true}
                    />
                    no
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-12 px-2 2xl:px-24'>
            <div>
              <div className='flex flex-col lg:flex-row lg:items-end gap-2'>
                <div>
                  <div className='flex items-end gap-1 lg:mt-4 mb-3 lg:mb-0'>
                    <ClassSelectInput
                      initialState={true}
                      initialStates={initialStates}
                      setInitialStates={setInitialStates}
                      hydratedData={hydratedData}
                      defaultDataTouched={defaultDataTouched}
                      setDefaultDataTouched={setDefaultDataTouched}
                      deleteAllRelatedClass={deleteAllRelatedClass}
                      initialClassesSelection={initialClassesSelection}
                    />
                    <CustomSelectInput
                      options={weeklyModifierOptions}
                      inputClass={'w-48'}
                      isInitial={true}
                      hydratedData={hydratedData}
                    />
                  </div>
                </div>
                <div
                  className={`flex items-start gap-1 h-[4.5rem] lg:items-end `}
                >
                  <NormalInput
                    type={'text'}
                    placeholder={'author'}
                    label='author'
                    id={'author'}
                    inputName={'initialState.author'}
                    registerOptions={{ required: true }}
                  />

                  <NormalInput
                    type='text'
                    placeholder='version'
                    id='version'
                    label='version'
                    registerOptions={{
                      pattern: {
                        value: /^[0-9_.-]*$/,
                        message: 'use only numbers',
                      },
                      required: true,
                    }}
                    inputName='initialState.version'
                    width='w-28'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <NormalInput
                    type='date'
                    placeholder='date'
                    id='date'
                    label='date'
                    inputName={'initialState.date'}
                  />
                </div>
              </div>
            </div>

            <ul
              className={`-mt-10 relative ${
                initialClassesSelection && rotationsExist && 'opacity-20'
              } `}
            >
              {Array.from(Array(16).keys())?.map((elem, i) => (
                <li className='mt-4 flex flex-col' key={elem + i}>
                  <h2 className='text-2xl font-ubuntu font-bold mb-1'>
                    Waves {i}
                  </h2>
                  <div>
                    <SpawnComponent
                      initialStates={initialStates}
                      setInitialStates={setInitialStates}
                      i={i}
                      objective={
                        i === 2 || i === 4 || i === 7 || i === 10 || i === 13
                          ? true
                          : false
                      }
                      dataChanges={dataChanges}
                      initialClassesIsDeleted={initialClassesIsDeleted}
                      hydratedData={hydratedData}
                      defaultDataTouched={defaultDataTouched}
                      setDefaultDataTouched={setDefaultDataTouched}
                      spawnLocations={spawnLocations}
                      spawnMapChanges={spawnMapChanges}
                    />
                  </div>
                </li>
              ))}
              {initialClassesSelection && rotationsExist && (
                <div className='w-full absolute top-4 h-full' />
              )}
            </ul>
            <button className='mt-2 mb-8 text-sm font-bold rounded-md border border-zinc-400 w-36 px-2 py-1'>
              Submit rotation
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const rotationId = context.query.rotationId;
  try {
    const spawnMaps = await getWeeklyMaps();

    if (rotationId) {
      const data = await getRotationByRotationId(rotationId as string);

      return {
        props: {
          data: data,
          spawnMaps: spawnMaps.data,
        },
      };
    } else {
      return {
        props: {
          data: {},
          spawnMaps: spawnMaps.data,
        },
      };
    }
  } catch (error: any) {
    return {
      notFound: true,
    };
  }
};
