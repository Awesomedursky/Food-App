import { useEffect } from 'react';

import Aos from 'aos';

import Button from './Button';
const SectionPageOne = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div
      className='flex flex-col shadow-md dark:bg-[#252837] p-4 border rounded-2xl dark:border-[#000] border-[#F17E6C] h-full dark:shadow-black shadow-[#F17E6C] transition-all duration-300'
      data-aos='fade-down'
      data-aos-delay='900'
      data-aos-duration='1000'
    >
      <div className='flex flex-row w-[28rem] justify-between mb-6'>
        <Button>All</Button>
        <Button>African</Button>
        <Button>Chinese</Button>
        <Button>Italian</Button>
        <Button>Desert</Button>
      </div>

      <div className='flex flex-wrap justify-center'>
        {}
      </div>
    </div>
  );
};

export default SectionPageOne;
