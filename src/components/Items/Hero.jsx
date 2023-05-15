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