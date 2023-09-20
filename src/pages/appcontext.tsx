// import React from 'react'
// import { createContext, useState } from 'react'
// import TomTom from './tomtom';


// type QueryParams = {
//     queryFrom: string
//     setQueryFrom:React.Dispatch<React.SetStateAction<string>>
//     queryTo: string
//     setQueryTo:React.Dispatch<React.SetStateAction<string>>
// }

// export const AppContext = createContext<QueryParams>({} as QueryParams);

// export default function AppcontextProvider({children}) {

// const [queryFrom, setQueryFrom] = useState("")
// const [queryTo, setQueryTo] = useState("")

//   return (
//     <AppContext.Provider value={{queryFrom, setQueryFrom, queryTo, setQueryTo}}>
//         {children}
//     </AppContext.Provider>
//   )
// }
