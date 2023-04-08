import { formatDate, getClassColor } from 'helpers';
import { GetServerSideProps } from 'next';
import React from 'react';
import { getAllWeeklyRotations } from 'services';
import { FormClasses } from 'types/global';
import Image from 'next/image';
import Wallpaper from '../public/assets/images/main-wallpaper.jpg';
import { useRouter } from 'next/router';

const Rotations: React.FC<{
  rotations: { id: number; initialState: FormClasses['initialState'] }[];
}> = (props) => {
  const router = useRouter();

  return (
    <>
      <div
        className='h-screen w-screen overflow-clip blur-sm relative  bg-cover bg-bottom bg-no-repeat font-Teko  font-teko'
        style={{
          backgroundImage: `url(${Wallpaper.src})`,
        }}
      />
      <>
        <div className='z-20 absolute w-full h-[90%] sm:w-[65%] sm:h-[75%] overflow-clip text-white sm:top-[20%] top-6 px-3 sm:px-0 sm:translate-x-[30%]'>
          <div className='grid grid-flow-row grid-cols-4 pb-4 mb-3 border-b sm:text-sm xs:text-xs'>
            <div className='col-span-1'>AUTHOR</div>
            <div className='col-span-1'>VERSION</div>
            <div className='col-span-1'>DATE</div>
            <div className='col-span-1'>CLASSES</div>
          </div>
          <ul className='h-[90%] sm:full sm:h-full overflow-y-auto overflow-x-clip'>
            {props.rotations
              ?.filter((item) => !item.initialState.isPublic)
              ?.map((rotation) => (
                <li
                  key={rotation.id}
                  className='cursor-pointer hover:bg-red2 hover:bg-opacity-50 py-2'
                  onClick={() => router.push(`/rotation/${rotation.id}`)}
                >
                  <div className='grid grid-flow-row grid-cols-4'>
                    <div className='col-span-1 truncate text-sm sm:text-base'>
                      {rotation.initialState.author}
                    </div>
                    <div className='col-span-1 truncate text-sm sm:text-base'>
                      {rotation.initialState.version}
                    </div>
                    <div className='col-span-1 truncate text-sm sm:text-base'>
                      {rotation.initialState.date
                        ? formatDate(rotation.initialState.date)
                        : '-'}
                    </div>
                    <div className='col-span-1'>
                      {' '}
                      <div className='flex items-start gap-[1px] sm:gap-1'>
                        {rotation.initialState.initialClasses?.map(
                          (selectedClasses) => (
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
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </>
    </>
    // </div>
  );
};

export default Rotations;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await getAllWeeklyRotations();

    return {
      props: {
        rotations: data,
      },
    };
  } catch (error: any) {
    return {
      notFound: true,
    };
  }
};
