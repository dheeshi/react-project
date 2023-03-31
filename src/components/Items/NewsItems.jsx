import React from 'react';
import Cards from '../Items/Cards';

import { useGetNewsQuery } from '../../Services/newsApi';


const NewsItems = () => {

  const { data } = useGetNewsQuery();



  return (
    <div>


      <div className='bg-white  w-full  py-[0.5rem] px-4 '>
        <div className='text-[#1d2636] lg:pl-28 md:pl-5'>
          <p className='font-extrabold uppercase antialiased px-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>top news</p>
        </div>
      </div>

      <div id='slider'
        className='w-full h-full overflow-x-scroll scroll bg-white scroll-smooth scrollbar-hide' >
        <div className='relative flex items-center '>
          {data?.map((news) => (
            <Cards
              key={news.key}
              news={news}
            />
          ))}
        </div>
      </div>





    </div>

  )
}

export default NewsItems