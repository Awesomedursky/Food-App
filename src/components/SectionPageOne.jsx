import { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { useGetRandomQuery } from '../features/food/foodSlice';

import Aos from 'aos';

import Button from './Button';
const SectionPageOne = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const { data, error, isLoading } = useGetRandomQuery(100);


  return (
    <div
      className='flex-col shadow-md dark:bg-[#252837] p-4 border rounded-2xl dark:border-[#000] border-[#F17E6C] dark:shadow-black shadow-[#F17E6C] transition-all duration-300 h-[80vh] overflow-y-auto scrollbar-none pb-5'
      data-aos='fade-down'
      data-aos-delay='900'
      data-aos-duration='1000'
    >
      <div className='flex gap-1 sm:gap-3 mb-4 flex-wrap sticky top-[-20px] p-3 bg-inherit'>
        <Button >Random</Button>
        <Button>African</Button>
        <Button>Chinese</Button>
        <Button>Italian</Button>
        <Button>Desert</Button>
      </div>
 
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6'>
        {error ? (
          <div className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]'>{error.status}</div>
        ) : isLoading ? (
          <ThreeCircles
            height='50'
            width='50'
            radius='5'
            color='white'
            visible='true'
            ariaLabel='three-circles-rotating'
            wrapperClass='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]'
          />
        ) : data ? (
          <>
            {data.recipes?.map((food) => (
              <>
                <div key={food.id} className='flex flex-wrap justify-center rounded-2xl dark:bg-white dark:text-black overflow-clip object-cover'>
                  <img alt={food?.srcUrl} src={food?.image} className='object-cover min-w-full' loading='lazy' />
                  <div className='m-2'>
                    <p className='text-bold'>{food.title}</p>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : null}

        {/* {foods.loading && <div className='flex justify-center align-bottom'>Loading....</div>}
        {foods.data.recipes?.map((food) => (
          
        ))}
        {foods.error && <div>Error!</div>} */}
      </div>
    </div>
  );
};

export default SectionPageOne;
