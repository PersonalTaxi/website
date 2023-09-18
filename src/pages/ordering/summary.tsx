import React, { useEffect, Component, useContext } from 'react'
import { AppContext } from '../_app'

export default function Summary() {

    const {FromLocalization, setFromLocalization} = useContext(AppContext)
    console.log(FromLocalization)


    


  return (
    <div>summary</div>
  )
}
