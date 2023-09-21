import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  
  return (
    <div className='fixed z-40 h-[50px] w-screen bg-black  border-gray-900 flex items-center justify-between px-[20px]'>
        <div>
          <Image 
          src="/Logo.png"
          width={100}
          height={100}
          alt="taxi_krakow"
          ></Image>
        </div>
        <RxHamburgerMenu className="text-yellow-500 w-[30px] h-[30px]" />
    </div>
  )
}
