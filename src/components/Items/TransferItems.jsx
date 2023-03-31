import React from 'react';


import { useGetTransfersQuery } from '../../Services/newsApi';


const TransferItems = () => {

  const { data } = useGetTransfersQuery()

  return (
    <>

      <div className='bg-[#1d2636] w-full  py-[0.5rem] px-4 '>

        <div className='text-sky-200 lg:pl-28 md:pl-5'>
          <p className='font-extrabold uppercase antialiased px-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>top transfers</p>
        </div>




        <div id='slider'
          className='w-full h-full overflow-x-scroll scroll  scroll-smooth scrollbar-hide' >
          <div className='relative flex items-center gap-10 w-[800px]'>


            {data?.map((transfers, key) => {
              return (
                <div className='w-auto h-[350px] shadow-2xl bg-[#1d2636] flex flex-col p-5 my-2  rounded-3xl hover:scale-105 duration-300'>
                  <div className=' text-sky-200 items-center' key={key}  >

                    <p className='font-extrabold text-2xl'>{transfers.playerName}</p>

                    <p className='font-light text-lg'>({transfers.transferType})</p>
                    <p className='font-semibold text-gray-500 text-lg'>{transfers.transferDate}</p>

                    <p className='text-lg'>{transfers.playerRole}</p>
                    <p className='text-lg'>{transfers.oldClub}</p>
                    <p className='text-lg'>{transfers.newClub}</p>
                    <p className='text-lg'>{transfers.price}</p>
                    <p className='text-lg'>{transfers.renewal}</p>

                  </div>
                </div>
              )
            })}

          </div>

        </div>

      </div>

    </>
  )
}

export default TransferItems