import React from 'react';

import { Link } from 'react-router-dom';


const Cards = ({ news }) => {

    return (


        <div>


            <div className='flex flex-col w-[600px] bg-white mx-auto px-10'>

                <div className='w-full h-full shadow-xl bg-yellow-200 flex flex-col p-5 my-5 rounded-2xl hover:scale-105 duration-300'>

                    <div className='relative w-full h-56 group'>
                        <img alt='' src={news.Image} className='w-full h-full rounded-lg' />
                    </div>

                    <div className='flex flex-col'>

                        <p className='font-extrabold text-2xl text-black first-letter:text-5xl first-line:tracking-widest '>
                            {news.Title}
                        </p>

                        <Link to={news.NewsLink}>
                            <span className='text-lg text-gray-500'>read more...</span>
                        </Link>

                        <p className='font-light text-lg text-black '>
                            {news.PublisherDate}
                        </p>

                        <div className='font-semibold inline-flex  items-center  text-lg text-black  '>
                            <img alt='' src={news.PublisherLogo} className=' rounded-3xl' />
                            <span className='justify-between'> {news.PublisherName}</span>
                        </div>

                    </div>

                </div>
            </div>


        </div>

    )
}

export default Cards