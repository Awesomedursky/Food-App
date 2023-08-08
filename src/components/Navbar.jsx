import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BiSolidHome } from 'react-icons/bi';
import { GoPersonFill } from 'react-icons/go';
import {
  BsFillChatFill,
  BsFillMoonFill,
  BsSunFill,
} from 'react-icons/bs';

import { GiForkKnifeSpoon } from 'react-icons/gi';
import { AiFillQuestionCircle } from 'react-icons/ai';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const Navbar = () => {
  const { darkTheme } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleTheme());

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const linkClass = ({ isActive }) => {
    let i =
      'text-2xl hover:opacity-50 transition-all duration-300 dark:text-white';
    return isActive
      ? `${i} text-[#F17E6C] text-opacity-50 dark:text-white dark:text-opacity-50`
      : `${i} `;
  };

  return (
    // Navbar Container
    <div
      className='h-screen flex flex-col  justify-between items-center transition-all dark:shadow-[#000000be] shadow-[#F17E6C] shadow-xl px-1 py-5'
      data-aos='fade-right'
      data-aos-delay='500'
      data-aos-duration='500'
    >
      <NavLink to='/'>
        <img
          src=''
          alt='logo'
          className='w-20 animate-pulse'
        />
      </NavLink>

      <div className='flex flex-col gap-12 h-[60%]'>
        <NavLink to='/' className={linkClass}>
          <BiSolidHome
            data-te-toggle='tooltip'
            title='Home'
          />
        </NavLink>

        <NavLink
          to='profile'
          className={linkClass}
        >
          <GoPersonFill
            data-te-toggle='tooltip'
            title='Profile'
          />
        </NavLink>

        <NavLink to='chat' className={linkClass}>
          <BsFillChatFill
            data-te-toggle='tooltip'
            title='Chat'
          />
        </NavLink>

        <NavLink to='book' className={linkClass}>
          <GiForkKnifeSpoon
            data-te-toggle='tooltip'
            title='Book a Seat'
          />
        </NavLink>

        <NavLink to='faq' className={linkClass}>
          <AiFillQuestionCircle
            data-te-toggle='tooltip'
            title='FAQ'
          />
        </NavLink>
      </div>

      <div>
        {darkTheme && (
          <NavLink className={linkClass}>
            <BsFillMoonFill
              onClick={() => onToggle()}
            />
          </NavLink>
        )}
        {!darkTheme && (
          <NavLink className={linkClass}>
            <BsSunFill
              onClick={() => onToggle()}
            />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
