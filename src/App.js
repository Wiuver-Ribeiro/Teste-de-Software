import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Carros from './pages/Carros/Carros';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/carros" element={<Carros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;