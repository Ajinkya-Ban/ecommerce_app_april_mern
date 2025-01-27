import './App.css';

import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<HomePage />} ></Route>
    <Route path='/about' element={<About />} ></Route>
    <Route path='/contact' element={<Contact />} ></Route>
    <Route path='*' element={<PageNotFound />} ></Route>
   </Routes>
    </>
  );
}

export default App;
