import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'

export const AppContext = createContext(null);

export default function App({ Component, pageProps }: AppProps) {

      //choosed params 
      const [FromLocalization, setFromLocalization] = useState("dupa");
      const [ToLocalization, setToLocalization] = useState();
      const [Date, setDate] = useState();
      const [Time, setTime] = useState();
  
  return (
    <AppContext.Provider value={{FromLocalization, setFromLocalization}}>
      <Component {...pageProps} />
    </AppContext.Provider>
    )
}
