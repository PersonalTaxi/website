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
  people: number
  setPeople:React.Dispatch<React.SetStateAction<number>>
  latLangFrom: any
  setlatLangFrom:React.Dispatch<React.SetStateAction<any>>
  latLangTo: any
  setlatLangTo:React.Dispatch<React.SetStateAction<any>>
  calculateDistance:any
  setCalculateDistance:React.Dispatch<React.SetStateAction<any>>
  isFormCompleted:any
  setIsFromCompleted:React.Dispatch<React.SetStateAction<any>>
}

export const AppContext = createContext({} as QueryParams );

export default function App({ Component, pageProps }: AppProps) {

  const [queryFrom, setQueryFrom] = useState("")
  const [queryTo, setQueryTo] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [people, setPeople] = useState(2)
  const [latLangFrom, setlatLangFrom] = useState(null)
  const [latLangTo, setlatLangTo] = useState(null)
  const [calculateDistance, setCalculateDistance] = useState(null)
  const [isFormCompleted, setIsFromCompleted] = useState(false);

  return (
    <AppContext.Provider value={{queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime, people, setPeople, latLangFrom, setlatLangFrom, latLangTo, setlatLangTo, calculateDistance, setCalculateDistance, isFormCompleted, setIsFromCompleted}}>
      <Component {...pageProps} />
    </AppContext.Provider>
    )
}
