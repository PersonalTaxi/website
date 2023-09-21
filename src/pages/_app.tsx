import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useReducer, useState } from 'react'
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
  passengers: number
  setPassengers:React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = createContext({} as QueryParams );

export default function App({ Component, pageProps }: AppProps) {

  const [queryFrom, setQueryFrom] = useState("")
  const [queryTo, setQueryTo] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [passengers, setPassengers] = useState(2)

  return (
    <AppContext.Provider value={{queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime, passengers, setPassengers}}>
      <Component {...pageProps} />
    </AppContext.Provider>
    )
}
