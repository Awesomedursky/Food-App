import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import Aos from 'aos';

const Header = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className='flex flex-row flex-wrap w-full justify-between items-center gap-2'>
      <h2
        className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[4rem] dark:text-white font-bold font-monowhitespace-pre  md:ml-0 mt-2'
        data-aos='fade-down'
        data-aos-delay='1000'
        data-aos-duration='1000'
      >
        Welcome here
      </h2>
      <div className='flex-row relative sm:mt-0' data-aos='fade-left' data-aos-delay='1500' data-aos-duration='1000'>
        <BiSearch className='h-7 w-7 absolute z-10 dark:text-white left-2 top-2 md:top-3 2xl:top-5' />
        <input
          type='text'
          placeholder='Search food'
          className='bg-transparent w-full sm:w-96 rounded-full py-2 md:py-3 2xl:py-5 pr-10 pl-10 border dark:border-black focus:border-[#F17E6C] dark:placeholder-white placeholder-opacity-50 dark:placeholder-opacity-50 dark:shadow-[#000000be] shadow-[#F17E6C] border-[#F17E6C] shadow-md font-small dark:text-white focus:outline-0 focus:shadow-[#F17E6C] focus:shadow-md transition-all placeholder-[#F17E6C]'
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
