import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import Search from './MainPage/Search/search'

type QueryParams = {
  queryFrom: string
  setQueryFrom:React.Dispatch<React.SetStateAction<string>>
  queryTo: string
  setQueryTo:React.Dispatch<React.SetStateAction<string>>
  date: any
  setDate:React.Dispatch<React.SetStateAction<any>>
  time: any
  setTime:React.Dispatch<React.SetStateAction<any>>
  
}

export const AppContext = createContext({} as QueryParams );

export default function App({ Component, pageProps }: AppProps) {

  const [queryFrom, setQueryFrom] = useState("")
  const [queryTo, setQueryTo] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  return (
    <AppContext.Provider value={{queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime}}>
      <Component {...pageProps} />
    </AppContext.Provider>
    )
}
