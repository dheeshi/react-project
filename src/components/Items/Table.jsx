import React from 'react'

import { useGetTableQuery } from '../../Services/newsApi';

const Table = () => {

  const { data } = useGetTableQuery();

  return (

    <>


      <div className='bg-[#1d2636] w-full  py-[0.5rem] px-4  '>
        <div className='text-sky-200 lg:pl-28 md:pl-5'>
          <p className='font-extrabold uppercase antialiased px-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>Premier League table</p>
        </div>
      </div>


      <div className="w-full h-[250vh]  flex justify-center items-center bg-[#1d2636]">
        <table className='w-[750px]  mt-7 mb-7  border-solid border-8 border-slate-200 '>
          <tr className='border-b-8 uppercase text-sky-700 font-bold border-solid border-slate-200'>
            <th>Pos</th>
            <th>Club</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Pts</th>
          </tr>
          {data?.map((table, key) => {
            return (
              <tr key={key} className='text-center text-sky-200 font-semibold mt-7 mb-7 border-solid border-2 divide-x border-white ' >
                <td>{table.Position}</td>
                <td className='text-left' >
                  <td><img className='mt-2 mb-2' src={table.SquadLogo} alt='/' /></td>
                  <td>{table.Name}</td>
                </td>
                <td>{table.Played}</td>
                <td>{table.Winned}</td>
                <td>{table.Tie}</td>
                <td>{table.Loosed}</td>
                <td className='text-sky-200 font-extrabold'>{table.Points}</td>
              </tr>
            )
          })}
        </table>
      </div>


    </>

  )
}

export default Table