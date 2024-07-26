import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

function Header() {
    // const router = useRouter();
    const ifLoggedIn = () => {
        const ifAdmin = Cookies.get('admin');
        if (!ifAdmin) {
            router.push('/');
        }
    }
    const logoutAdmin = () => {
        Cookies.remove('admin');
        router.push('/');
    }

    return (
        <>
            <header className='bg-white z-10 sticky top-0 left-0 flex justify-between items-center p-4 shadow-lg border *:flex *:gap-8'>
                <div>
                    <div>
                        <Link href={'/dashboard'}>
                            <img src="https://technext.github.io/skydash/images/logo.svg" alt="" className='h-[30px]' />
                        </Link>
                    </div>
                </div>
                <div className='font-medium'>
                    <div onClick={logoutAdmin}><Link href={'/'}>Logout</Link></div>
                    <div><Link href={'/dashboard'}>My Profile</Link></div>
                </div>
            </header>
        </>
    )
}

export default Header