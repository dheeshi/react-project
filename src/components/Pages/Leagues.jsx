import React from 'react';


import LeaguesItems from '../Items/LeaguesItems';

function Leagues() {

  return (


    <>

      <div className="relative w-full">
        <img className='left-0 w-full h-96 object-cover opacity-50'
          src="https://pbs.twimg.com/media/FMdnR-VXoAcNY1c.jpg:large"
          alt='/' />

        <div className='absolute p-11 top-64 left-1/3 -translate-x-1/2 -translate-y-1/2'>

          <h3 className="text-lg text-white">Leagues</h3>

          <p className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl  text-white font-bold"> Results,Fixtures & More</p>

        </div>
      </div>

      <LeaguesItems />

    </>

  )
}

export default Leagues