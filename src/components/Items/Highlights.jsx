import React, { useState, useEffect } from 'react';

import axios from 'axios';


const Highlights = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios({
            method: "GET",
            url: `https://www.scorebat.com/video-api/v3/feed/?token=NjI1ODVfMTY3NzM5MjI1MF82MmFhNWVkNzY4YTFjZDI1Yjk0ZTY3OTAzODVlN2M1NDY3YzE3ZTUy`
        }).then(res => {

            setData(res.data.response);
        }).catch(e => console.log(e))

    }, []);


    return (
        <>

            <div className='bg-transparent w-full  py-[2rem] px-4  '>
                <div className='text-sky-200  lg:pl-28 md:pl-5'>
                    <p className='font-extrabold uppercase antialiased px-4 text-3xl sm:text-3xl md:text-4xl lg:text-5xl'>Highlights</p>
                    <a className='flex flex-wrap  font-serif mx-2 my-5 text-xl p-2 text-[#27ae60]'>
                        Click on the link and watch full match Highlights of your favorite teams</a>
                </div>
            </div>



            <div id='slider'
                className='w-full h-full overflow-x-scroll scroll  scroll-smooth scrollbar-hide' >
                <div className='relative flex items-center'>

                    {data.map((item) => (
                        <div className='flex flex-col w-full bg-transparent mx-auto px-5'>

                            <div className='w-72 h-72 shadow-xl bg-yellow-200 flex flex-col p-5 my-2 rounded-3xl hover:scale-105 duration-300'
                                onClick={() => window.open(item.matchviewUrl)}
                                key={item.title}>

                                <div className='flex flex-col'>
                                    <h4 className='font-extrabold text-2xl text-black'>{item.title}</h4>
                                </div>

                                <div className='relative w-full h-56 group'>
                                    <img className='w-full h-full rounded-lg' src={item.thumbnail} alt='#' />
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default Highlights