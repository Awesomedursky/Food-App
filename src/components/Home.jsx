import React from 'react';

import Header from './Header';
import SectionPageOne from './SectionPageOne';

const Home = () => {
  return (
    <>
      <div className='flex flex-col p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 w-full justify-between'>
        <Header />
        <div>
          <SectionPageOne />
        </div>
      </div>
    </>
  );
};

export default Home;
