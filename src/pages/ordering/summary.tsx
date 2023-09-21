import React, { useEffect, Component, useContext, useRef } from 'react'
import Carcomponents from './carcomponents'
import Header from '../Header/header'
import Search from '../MainPage/Search/search'
import Head from 'next/head'
import { Ubuntu } from 'next/font/google'

const ubuntuFont = Ubuntu({
  subsets: ['latin'],
  weight:['300']
})


export default function Summary() {

  const MapElement:any = useRef();

  useEffect(() => {

   const importingMaps = async() => {
      const tt = await import("@tomtom-international/web-sdk-maps")
      let map = tt.map({
        key:'rKQOvSWb5WRcI826HMCl5W82PMDxhDqM',
        container: MapElement.current,
        stylesVisibility:{
          trafficIncidents:true,
          trafficFlow:true,
        },
        center:[19.945, 50.064],
        zoom:13
      })
    }

    importingMaps()

   

  },[])

  return (
    <div className={`w-screen  bg-cover bg-fixed ${ubuntuFont.className}`}>
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
      <div id='search-wrapper-ordering' className='pt-[50px]'>
          <div ref={MapElement} className='w-screen h-[450px] overflow-hidden'></div>
          <div className='bg-white w-screen h-[350px] rounded-t-[40px] z-20 -mt-[15px]'>
            <Search/>
          </div>
      </div>
      <Carcomponents />
    </div>
  )
}
