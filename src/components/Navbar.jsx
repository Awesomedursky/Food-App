import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BiMenu, BiSolidHome } from 'react-icons/bi';

import { GoPersonFill } from 'react-icons/go';

import { BsFillChatFill, BsFillMoonFill, BsSunFill } from 'react-icons/bs';

import { GiForkKnifeSpoon } from 'react-icons/gi';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);



  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const { darkTheme } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleTheme());

  const linkClass = ({ isActive }) => {
    let i = 'text-lg lg:text-xl xl:text-2xl 2xl:text-[4rem] hover:opacity-50 transition-all duration-300 dark:text-white';
    return isActive ? `${i} text-[#F17E6C] text-opacity-50 dark:text-white dark:text-opacity-50` : `${i} `;
  };

  return (
    <>
      {activeMenu && (
        <div
          className={`flex h-screen flex-col justify-between items-center transition-all dark:shadow-[#000000be] shadow-[#F17E6C] shadow-xl py-1 px-1 sm:py-5 2xl:px-10 dark:bg-transparent `}
          data-aos='fade-right'
          data-aos-delay='500'
          data-aos-duration='500'
        >
          <NavLink to='/'>
            <img src='' alt='logo' className='lg:w-20 animate-pulse' />
          </NavLink>

          <div className='flex flex-col justify-between h-[60%]'>
            <NavLink to='/' className={linkClass}>
              <BiSolidHome data-te-toggle='tooltip' title='Home' />
            </NavLink>

            <NavLink to='profile' className={linkClass}>
              <GoPersonFill data-te-toggle='tooltip' title='Profile' />
            </NavLink>
            <NavLink to='chat' className={linkClass}>
              <BsFillChatFill data-te-toggle='tooltip' title='Chat' />
            </NavLink>
            <NavLink to='book' className={linkClass}>
              <GiForkKnifeSpoon data-te-toggle='tooltip' title='Book a Seat' />
            </NavLink>
            <NavLink to='faq' className={linkClass}>
              <AiFillQuestionCircle data-te-toggle='tooltip' title='FAQ' />
            </NavLink>
          </div>

          <div>
            {darkTheme && (
              <NavLink className={linkClass}>
                <BsFillMoonFill onClick={() => onToggle()} />
              </NavLink>
            )}
            {!darkTheme && (
              <NavLink className={linkClass}>
                <BsSunFill onClick={() => onToggle()} />
              </NavLink>
            )}
          </div>
        </div>
      )}

      <div className='absolute right-2 sm:top-1 top-[1rem]'>
        <BiMenu size={30} className='md:hidden transition-all duration-100' onClick={()=>setActiveMenu(!activeMenu)}/>
      </div>
    </>
  );
};

export default Navbar;
