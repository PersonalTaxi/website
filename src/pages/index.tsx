import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Header/Header'
import Main from './MainPage/Main'

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
    </main>
  )
}
