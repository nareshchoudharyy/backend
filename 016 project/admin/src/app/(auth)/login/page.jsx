'use client'
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function login() {
  const router = new useRouter();

  const ifLoggedIn = () => {
    const ifAdmin = Cookies.get('admin');
    if (ifAdmin) {
      router.push('/dashboard');
    }
  }
  useEffect(()=>{
    ifLoggedIn();
  },[])

  const [details, setDetails] = useState({});
  const getDetails = async () => {
    const response = await fetch('http://localhost:5500/admin/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
    if (response.status == 200) {
      const loginData = await response.json();
      Cookies.set('admin', JSON.stringify(loginData.data));
      router.push('/dashboard');
      alert('login successful')
    } else {
      alert('Invalid Credentials')
    }
  }
  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-[#F5F7FF] flex justify-center items-center'>
        <div className='w-[450px] p-8 bg-white flex flex-col gap-4'>
          <div className='text-[40px] text-[#483285] font-semibold'>
            SkyDash
          </div>
          <div>
            Sign in to continue
          </div>
          <div>
            <form action="" className='flex flex-col gap-4'>
              <input className='p-3 border focus:outline-blue-400' type="text" name="mail" placeholder="Mail" onChange={(e) => setDetails({ ...details, mail: e.target.value })} />
              <input className='p-3 border focus:outline-blue-400' type="text" name="password" placeholder="Password" onChange={(e) => setDetails({ ...details, password: e.target.value })} />
            </form>
          </div>
          <div className='text-center'>
            <button className='bg-[#483285] text-white text-[30px] py-2 px-8 rounded-md' onClick={getDetails}>Login</button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 justify-center items-center'>
              <input className='w-[17px] h-[17px]' type="checkbox" name="KeepSignIn" id="KeepSignIn" />
              <label htmlFor="KeepSignIn">Keep me Sign In</label>
            </div>
            <div className='cursor-pointer text-sm'>
              Forgot Password ?
            </div>
          </div>
          <hr />
          <div className='flex gap-2 items-center text-sm'>
            Create an account
            <Link href="/register" className='text-blue-500'>Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default login