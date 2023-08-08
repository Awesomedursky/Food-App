import { Routes, Route } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Navbar,
  Home,
  Profile,
  Chat,
  Book,
  Faq,
} from './components';
import { useEffect } from 'react';
import { getFoods } from './features/food/foodSlice';

function App() {
  const darkTheme = useSelector(
    (state) => state.darkTheme
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getFoods(process.env.REACT_APP_API_KEY)
    );
  }, [dispatch]);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='flex overflow-hidden dark:bg-[#252837] bg-white dark:text-white text-[#F17E6C]  transition-all duration-300'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            exact
            element={<Home />}
          />

          <Route
            exact
            path='profile'
            element={<Profile />}
          />
          <Route
            path='chat'
            exact
            element={<Chat />}
          />
          <Route
            path='book'
            exact
            element={<Book />}
          />
          <Route
            path='faq'
            exact
            element={<Faq />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

