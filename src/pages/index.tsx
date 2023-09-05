import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Header/header'
import Main from './MainPage/main'

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
