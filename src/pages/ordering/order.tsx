import React, { useEffect, Component, useContext } from 'react'
import Carcomponents from './carcomponents'
import Header from '../Header/header'
import Search from '../MainPage/Search/search'
import Head from 'next/head'
import AppContext from '../_app'

export default function Order() {

    // const {FromLocalization, setFromLocalization} = useContext(AppContext)
    // console.log(FromLocalization)

  return (
    <div className='bg-[url("/Main_theme.png")] w-screen h-screen bg-cover'>
       <Head>
            <meta http-equiv='X-UA-Compatible' content='IE=Edge' ></meta>
            <title>Your best drive</title>
            <meta name='viewport'
                content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'></meta>
            <link rel='stylesheet' type='text/css' href='/cdn.web-sdk-maps/maps.css'></link>
            <link rel='stylesheet' type='text/css' href='../assets/ui-library/index.css'></link>
            <link rel='stylesheet' type='text/css' href='/cdn.web-sdk-plugin-searchbox/SearchBox.css'></link>
            <link rel='stylesheet' type='text/css' href='../assets/ui-library/icons-css/poi.css'></link>
        </Head>
      <Header />
      <div id='search-wrapper-ordering' className='pt-[80px]'>
          <Search/>
      </div>
    
      <Carcomponents />
    </div>
  )
}
