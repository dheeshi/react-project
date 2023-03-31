import React from 'react';

const ContactUs = () => {

  return (

    <>

      <div className="relative  bg-white  py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Drop the ball</p>

        <div className="md:flex items-center mt-12">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
            <input tabIndex={0} arial-label="Please input name" type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
            <input tabIndex={0} arial-label="Please input email address" type="name"
              className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name"
              className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
          </div>
        </div>
        <p className="text-xs leading-3 text-gray-600 mt-4">*By clicking submit you agree to our terms of service, privacy policy and how we use data as stated.</p>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 text-base font-mono font-thin text-sky-200 py-4 px-10 bg-[#27ae60] rounded-md hover:bg-[#1a8547]">Throw-In⚽</button>
        </div>
      </div>

    </>

  )
}

export default ContactUs