'use client'
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = new useRouter();

  const ifLoggedIn = () => {
    const ifAdmin = Cookies.get('admin');
    if (ifAdmin) {
      router.push('/dashboard');
    }
  }
  ifLoggedIn();

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl">Welcome to Website</h1>
        <div className="p-2 flex gap-6">
          <Link href={'/login'}>
            <button className="border py-2 px-4 rounded-md bg-blue-500 text-white">
              Login
            </button>
          </Link>
          <Link href={'/register'}>
            <button className="border py-2 px-4 rounded-md bg-blue-500 text-white">
              Registor
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}