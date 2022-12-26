
import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import BookLayout from './pages/BookLayout';

function App() {
  return (
    <>
      <nav>
        <Routes>
          <Route path='booklist' element={<h1>some extra code </h1>} />
        </Routes>
        <ul>
          <li>
            {/* <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : 'black' } }}
              to='/'> Home </NavLink> */}
            <NavLink to='/' end>Home</NavLink>

          </li>
          <li>
            <NavLink to='/booklist'>Booklist</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='booklist' element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

