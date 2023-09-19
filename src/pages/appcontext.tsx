import React from 'react'
import { createContext, useState } from 'react'


type QueryParams = {
    queryFrom: string
    setQueryFrom:React.Dispatch<React.SetStateAction<string>>
    queryTo: string
    setQueryTo:React.Dispatch<React.SetStateAction<string>>

}

export const AppContext = createContext<QueryParams>({} as QueryParams);

export default function Appcontext() {

const [queryFrom, setQueryFrom] = useState("")
const [queryTo, setQueryTo] = useState("")

  return (
    <div>appcontext</div>
  )
}
