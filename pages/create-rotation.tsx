import {
  ClassSelectInput,
  CustomSelectInput,
  SpawnComponent,
} from 'components';
import Head from 'next/head';
import { useCreateRotation } from 'hooks';
import { FormProvider } from 'react-hook-form';
import { NormalInput } from 'components';
import axios from 'axios';
import { FormClasses } from 'types/global';
import { GetServerSideProps } from 'next';

export default function CreateRotation(props: { data: FormClasses }) {
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
    enableClassChangeHandler,
    cancelClassChangeHandler,
    submitClassChangeHandler,
    initialClassesSelection,
    rotationsExist,
  } = useCreateRotation(props.data);

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
        <FormProvider {...form}>
          <form
            className='flex flex-col gap-12 px-2 2xl:px-24'
            onSubmit={handleSubmit(onSubmit)}
          >
            <>
              <button>submit</button>
              <div>
                <div className='pb-8'>
                  {!initialClassesSelection ? (
                    <button
                      type='button'
                      className='text-sm text-slate-400'
                      onClick={() => enableClassChangeHandler()}
                    >
                      Edit classes
                    </button>
                  ) : (
                    rotationsExist && (
                      <div className='flex gap-2'>
                        <button
                          type='button'
                          className='text-sm text-rose-600'
                          onClick={() => cancelClassChangeHandler()}
                        >
                          cancel
                        </button>
                        <button
                          type='button'
                          className='text-sm text-green'
                          onClick={() => submitClassChangeHandler()}
                        >
                          submit
                        </button>
                      </div>
                    )
                  )}
                </div>

                <div className='flex flex-col lg:flex-row lg:items-end gap-2'>
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
                  <div className='flex items-start gap-1 h-[4.5rem] lg:items-end'>
                    <NormalInput
                      type={'text'}
                      placeholder={'author'}
                      label='author'
                      id={'author'}
                      inputName={'initialState.author'}
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
                      }}
                      inputName='initialState.version'
                      width='w-28'
                    />
                  </div>
                  <NormalInput
                    type='date'
                    placeholder='date'
                    id='date'
                    label='date'
                    inputName={'initialState.date'}
                  />
                </div>
              </div>

              <ul
                className={`-mt-10 relative ${
                  initialClassesSelection && rotationsExist && 'opacity-20'
                } `}
              >
                {Array.from({ length: 16 }, (_, i) => i + 1)?.map((elem, i) => (
                  <li className='mt-4 flex flex-col' key={i}>
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
                        hydratedData={hydratedData}
                        defaultDataTouched={defaultDataTouched}
                        setDefaultDataTouched={setDefaultDataTouched}
                      />
                    </div>
                  </li>
                ))}
                {initialClassesSelection && rotationsExist && (
                  <div className='w-full absolute top-4 h-full' />
                )}
              </ul>
            </>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.query.token;
  try {
    if (token) {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/rotations/${token}`
      );

      return {
        props: {
          data: data.data,
        },
      };
    } else {
      return {
        props: {
          data: {},
        },
      };
    }
  } catch (error: any) {
    return {
      notFound: true,
    };
  }
};
