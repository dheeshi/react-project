import React from 'react';

import Circles from './Circles';


const AboutUs = () => {


  return (


    <div className='p-10 bg-[#1d2636]'>

      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://media.gettyimages.com/id/1472162268/photo/matthijs-de-ligt-of-fc-bayern-munich-clears-the-ball-off-the-line-during-the-uefa-champions.jpg?s=612x612&w=0&k=20&c=cVwjkW0PzyVt-AkWrJibcM5SDuBTOK376vHMJf--5U8="
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://wallpaperaccess.com/full/5644538.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <Circles />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-primary text-sky-500 mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-dark text-sky-200 mb-8 text-3xl font-bold sm:text-4xl">
                  Make your customers happy by giving services.
                </h2>
                <p className="text-body-color text-sky-200 mb-8 text-base">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The point
                  of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="text-body-color text-sky-200 mb-12 text-base">
                  A domain name is one of the first steps to establishing your brand.
                  Secure a consistent brand image with a domain name that matches your
                  business.
                </p>
                <a
                  href="/"
                  className="bg-primary font-mono inline-flex items-center bg-[#27ae60] justify-center rounded-lg py-4 px-10 text-center text-base font-thin text-sky-200 hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Kickoff⚽
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>


  )
}

export default AboutUs