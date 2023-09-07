import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Header/header'
import Main from './MainPage/main'
import { useEffect } from 'react'

export default function Home() {

  return (
    <>
      <main>
        <Header />
        <Main />
      </main>
    </>
  )
}
