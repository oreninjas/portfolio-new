import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  //  className='h-screen overflow-hidden'
  return (
    <div>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
