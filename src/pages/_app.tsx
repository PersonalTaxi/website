import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import Search from './MainPage/Search/search'

type QueryParams = {
  queryFrom: string
  setQueryFrom:React.Dispatch<React.SetStateAction<string>>
  queryTo: string
  setQueryTo:React.Dispatch<React.SetStateAction<string>>
  
}

export const AppContext = createContext<QueryParams | null>(null);

export default function App({ Component, pageProps }: AppProps) {

  const [queryFrom, setQueryFrom] = useState("")
  const [queryTo, setQueryTo] = useState("")

  return (
    <AppContext.Provider value={{queryFrom, setQueryFrom, queryTo, setQueryTo}}>
      <Component {...pageProps} />
    </AppContext.Provider>
    )
}
