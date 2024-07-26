'use client'
import React from 'react'
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

function page() {

  return (
    <>
      <Header />
      <div className='grid grid-cols-[15%_auto] h-[90vh]'>
        <div className='bg-white p-5'>
          <Sidebar />
        </div>
        <div className='bg-[#f5f7ff] p-10 flex justify-center items-center'>
          <h2 className='text-[30px] font-semibold'>Welcome To Admin Panel</h2>
          {/* <div className='my-5'>
            this is main div
          </div> */}
        </div>
      </div>
    </>
  )
}

export default page 