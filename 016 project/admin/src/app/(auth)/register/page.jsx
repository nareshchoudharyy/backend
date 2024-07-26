'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function login() {
    const [details, setDetails] = useState({});
    const checkDetails = () => {
        console.log(details)
    }
    return (
        <>
            <div className='w-[100vw] h-[100vh] bg-[#F5F7FF] flex justify-center items-center'>
                <div className='w-[450px] p-8 bg-white flex flex-col gap-4'>
                    <div className='text-[40px] text-[#483285] font-semibold'>
                        SkyDash
                    </div>
                    <div>
                        Sign up
                    </div>
                    <div>
                        <form action="" className='flex flex-col gap-4'>
                            <input className='p-3 border focus:outline-blue-400' type="text" name="mail" placeholder="Mail" onChange={(e) => setDetails({ ...details, mail: e.target.value })} />
                            <input className='p-3 border focus:outline-blue-400' type="text" name="password" placeholder="Password" onChange={(e) => setDetails({ ...details, password: e.target.value })} />
                        </form>
                    </div>
                    <div className='text-center'>
                        <button className='bg-[#483285] text-white text-[30px] py-2 px-8 rounded-md' onClick={checkDetails}>Sign Up</button>
                    </div>
                    <hr />
                    <div className='flex gap-2 items-center text-sm'>
                        Already have an account?
                        <Link href="/login" className='text-blue-500'>Sign In</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login