import { ClassSelectInput } from 'components';
import Head from 'next/head';
import { useCreateRotation } from 'hooks';
import { FormProvider } from 'react-hook-form';

export default function CreateRotation() {
  const {
    // options,
    selectedClasses,
    setSelectedClasses,
    // initialClassState,
    setInitialClassState,
    form,
  } = useCreateRotation();

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
          <form className='flex flex-col gap-12 ml-48'>
            <ClassSelectInput
              setInitialClassState={setInitialClassState}
              initialState={true}
              selectedClasses={selectedClasses}
              setSelectedClasses={setSelectedClasses}
            />
            <ClassSelectInput
              setInitialClassState={setInitialClassState}
              initialState={false}
              selectedClasses={selectedClasses}
              setSelectedClasses={setSelectedClasses}
            />
          </form>
        </FormProvider>
      </div>
    </>
  );
}
