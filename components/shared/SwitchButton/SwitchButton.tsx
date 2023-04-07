import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

const SwitchButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          value=''
          className='sr-only peer'
          onClick={() =>
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }
          checked={theme === 'dark'}
        />
        <div
          className={`w-9 h-6 relative  peer-focus:outline-none peer-focus:ring-4  border-light-100 after:bg-light-100 bg-white  dark:after:bg-dark-100 border  rounded-full peer peer-checked:bg-dark-200 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:left-[1px]  after:rounded-full after:h-4 after:w-4 after:transition-all`}
        >
          <SunIcon
            className={`dark:hidden w-[1rem] z-20 text-dark-200 absolute top-[0.2rem] left-[0.09rem]`}
          />

          <MoonIcon
            className={`hidden dark:flex w-3 z-20 absolute top-[0.3rem] right-[0.17rem]`}
          />
        </div>
      </label>
    </div>
  );
};

export default SwitchButton;
