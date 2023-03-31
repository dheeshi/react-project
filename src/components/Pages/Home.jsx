import React from 'react';

import Hero from '../../components/Items/Hero';
import NewsItems from '../Items/NewsItems';



const Home = () => {



  return (

    <>
      <div className="relative w-full">
        <img className='left-0 w-full h-96 object-cover opacity-50'
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1144dacc0c4dd5ab/60de737e3388dd0edc13e728/e4a3ef57a52bf543802cbf64f8743872373fd68e.jpg"
          alt='/' />

        <div className='absolute p-11 top-64 left-1/3 -translate-x-1/2 -translate-y-1/2'>

          <h3 className=" text-4xl animate-pulse text-white font-mono font-extrabold">Hi There!</h3>

          <p className="text-xl text-white  font-thin" >Your ultimate destination for football news, transfers, competitions, highlights, and more!</p>

        </div>
      </div>

      <Hero />

      <NewsItems />




    </>
  )
}

export default Home
