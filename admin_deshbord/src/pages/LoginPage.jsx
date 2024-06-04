import React from 'react'

export default function LoginPage() {
  return (
    <>
      <div className='bg-blue-400 border w-100 h-[100vh] flex justify-center items-center'>
        <div className='border bg-white p-5 rounded-xl '>
          <h1 className='text-3xl text-blue-900 my-[10px]'>Skydash</h1>
          <form action="">
            <div className='text-sm text-blue-500'>Sign in to continue.</div>
            <div className='flex justify-center items-center flex-col gap-[20px] my-5'>
              <input type="text" name="" id="username" placeholder='Username' className='text-md p-3 ps-2 border border-gray-300 w-[300px] rounded' />
              <input type="password" name="" id="password" placeholder='Password' className='text-md p-3 ps-2 border border-gray-300 w-[300px] rounded' />
            </div>
            <div className='text-center '>
              <button className='border bg-blue-600 text-white rounded-md p-[8px_15px] text-2xl w-[100%]'>Submit</button>
            </div>
            <div className='flex justify-between items-center text-sm mt-3'>
              <div>
                <input type="checkbox" id='keepSignIn' className='text-xl'/>
                <label htmlFor="keepSignIn"> Keep me signed in</label>
              </div>
              <div>
                <button className='text-blue-400'>Forgot Password?</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}