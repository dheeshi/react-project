import React from 'react';
import {  Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import News from './components/Pages/News';
import Transfers from './components/Pages/Transfers';
import Leagues from './components/Pages/Leagues';


function App() {

  return (


    <div className='flex flex-col bg-black h-screen justify-between'>

     
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/transfers' element={<Transfers />} />
          <Route path='/leagues' element={<Leagues />} />

        </Routes>
        <Footer />
      



    </div>
  )
}

export default App
