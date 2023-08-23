import { Routes, Route } from 'react-router-dom';
import {
  useSelector,
} from 'react-redux';
import { Navbar, Home, Profile, Chat, Book, Faq } from './components';

function App() {
  const darkTheme = useSelector((state) => state.darkTheme);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='flex dark:bg-[#252837] bg-white dark:text-white text-[#F17E6C]  transition-all duration-300 h-[100vh] overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />

          <Route exact path='profile' element={<Profile />} />
          <Route path='chat' exact element={<Chat />} />
          <Route path='book' exact element={<Book />} />
          <Route path='faq' exact element={<Faq />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

























