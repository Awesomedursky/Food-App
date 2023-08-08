import { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import Aos from 'aos';

const Header = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='flex flex-row flex-wrap w-full justify-between items-center'>
      <h2
        className='text-2xl dark:text-white font-bold font-mono'
        data-aos='fade-down'
        data-aos-delay='1000'
        data-aos-duration='1000'
      >
        Welcome here
      </h2>
      <div
        className='flex flex-row items-start relative'
        data-aos='fade-left'
        data-aos-delay='1500'
        data-aos-duration='1000'
      >
        <BiSearch className='h-7 w-7 absolute z-10 dark:text-white left-2 top-2' />
        <input
          type='text'
          placeholder='Search food'
          className='w-full bg-transparent rounded-full py-2 pl-10 pr-10 border dark:border-black focus:border-[#F17E6C] dark:placeholder-white placeholder-opacity-50 dark:placeholder-opacity-50 dark:shadow-[#000000be] shadow-[#F17E6C] border-[#F17E6C] shadow-md font-small dark:text-white focus:outline-0 focus:shadow-[#F17E6C] focus:shadow-md transition-all placeholder-[#F17E6C]'
        />
      </div>
    </div>
  );
};

export default Header;
