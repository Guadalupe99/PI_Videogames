import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';



const App = () => {
  const location = useLocation();
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      {location.pathname !== '/' && <Navbar setPage={ setPage } />}
      
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
