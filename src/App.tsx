import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Page1, Page2, Page3, Page4 } from './pages';

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Page1 /> }/>
              <Route path='/page-2' element={ <Page2 /> }/>
              <Route path='/page-3' element={ <Page3 /> }/>
              <Route path='/page-4' element={ <Page4 /> }/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
