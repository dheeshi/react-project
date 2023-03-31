import React from 'react';
import AboutUs from '../Items/AboutUs';
import ContactUs from '../Items/ContactUs';


const About = () => {

  return (
    <>

      <div className="relative w-full">
        <img className='left-0 w-full h-96 object-cover opacity-50'
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1144dacc0c4dd5ab/60de737e3388dd0edc13e728/e4a3ef57a52bf543802cbf64f8743872373fd68e.jpg"
          alt='/' />

        <div className='absolute p-11 top-64 left-1/3 -translate-x-1/2 -translate-y-1/2'>

          <h3 className="text-lg text-white">About Us</h3>

          <p className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl  text-white font-bold">About Us - Who We Are?</p>

        </div>
      </div>

      <AboutUs />
      <ContactUs />

    </>

  )
}

export default About