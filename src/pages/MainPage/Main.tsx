import React from 'react'
import Claim from './claim'
import Search from './Search/search'

export default function Main() {
  return (
    <div className='w-screen h-screen bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat flex flex-col pt-[50px] border'>
        <div className='h-[100px] bg-gradient-to-b from-black to-transparent border-white'></div>
        <Claim />
        <Search />
        <div className='absolute w-full h-full top-0 left-0 bg-black/[0.55]'></div>
    </div>
  )
}
