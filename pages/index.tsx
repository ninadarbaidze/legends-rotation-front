import { useMain } from 'hooks';
import Head from 'next/head';

export default function Home() {
  const { router } = useMain();
  return (
    <>
      <Head>
        <title className=''>Legends rotation - Ghost of Tsushima</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='h-screen w-screen overflow-clip bg-main_bg bg-cover bg-center font-Teko font-teko'>
        <div className='flex flex-col gap-4 justify-center items-center bg-black w-screen h-screen absolute top-0 left-0 bg-opacity-50 z-10'>
          <button
            className='px-12 py-2 hover:bg-black bg-red transition-all duration-300 rounded-md text-white text-4xl'
            onClick={() => router.push('/create-rotation')}
          >
            Create rotation
          </button>
          <button
            className='px-12 py-2 hover:bg-black bg-red transition-all duration-300 rounded-md text-white text-4xl'
            onClick={() => router.push('/rotations')}
          >
            All public rotations (weekly)
          </button>
        </div>
      </div>
    </>
  );
}
