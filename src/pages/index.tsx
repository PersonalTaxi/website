import Image from 'next/image'
import { Ubuntu } from 'next/font/google'
import Header from './Header/header'
import Main from './MainPage/main'


const rubikFonts = Ubuntu({
  subsets: ['latin'],
  weight:['300', '500','700']
})


export default function Home() {

  return (  
    <div className={`${rubikFonts.className}`}>
      <main >
        <Header />
        <Main  />
      </main>
    </div>
  )
}
