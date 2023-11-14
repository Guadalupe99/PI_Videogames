import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';



const App = () => {
  const location = useLocation();
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      {location.pathname !== '/' && <Navbar setPage={ setPage } />}
      
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
