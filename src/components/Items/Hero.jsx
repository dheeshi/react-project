import React from 'react';
import { Link } from 'react-router-dom';

import Highlights from '../Items/Highlights';
import Arena from '../../assets/Arena.png';



const Hero = () => {


  const btnClick = () => {
    window.open("https://en.wikipedia.org/wiki/Allianz_Arena");
  }



  return (


    <div>

      <div class="relative w-full">
        <img className='left-0 w-full h-44 lg:h-28 object-cover '
          src="https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt='/' />

        <div className='absolute p-11 top-20 lg:top-14 left-1/4 -translate-x-1/2 -translate-y-1/2'>
          <h3 class="lg:text-2xl  font-mono font-semibold text-green-200 animate-bounce ">Let’s play some ball!⚽</h3>
        </div>
      </div>




      <div className='bg-[#1d2636] grid sm:grid-cols-2 md:grid-cols-2 gap-8 py-[2rem] px-4 justify-between '>


        <p className='font-bold text-2xl text-sky-200 first-letter:text-5xl first-line:tracking-widest'>
          Allianz Arena (German; known as Fußball Arena München for UEFA competitions) is a football stadium in Munich, Bavaria, Germany
          with a 70,000 seating capacity for international matches and 75,000 for domestic matches.
          Widely known for its exterior of inflated ETFE plastic panels,
          it is the first stadium in the world with a full colour changing exterior.

          <Link>
            <button onClick={btnClick} className='flex flex-wrap cursor-pointer font-sans   rounded-full my-5 text-xl p-2 bg-[#27ae60]'>
              Read More</button>
          </Link></p>


        <img className=' left-0 w-full h-96 object-cover rounded-xl'
          src={Arena}
          alt='/' />

        <Highlights />

      </div>


    </div>

  )

}

export default Hero