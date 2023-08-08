import React from 'react';

import Header from './Header';
import SectionPageOne from './SectionPageOne';

const Home = () => {
  return (
    <>
      <div className='flex flex-col p-8 w-full h-screen gap-5'>
        <Header />
        <div>
          <SectionPageOne />
        </div>
      </div>
    </>
  );
};

export default Home;
