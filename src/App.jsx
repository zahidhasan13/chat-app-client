import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;