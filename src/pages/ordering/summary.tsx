import React, { useEffect, useLayoutEffect, Component, useContext, useRef, useState, useCallback } from 'react'
import Chooseparams from './chooseparams'
import Header from '../Header/header'
import Search from '../MainPage/Search/search'
import Link from 'next/link'
// import Head from 'next/head'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

export default function Summary() {

  const MapElement:any = useRef();
  const GoForMore:any = useRef()

  const handleScrolling = () => {
    if(window.scrollX < 200){
      GoForMore.current.style.display =  "none"
    }
  }
  
  useEffect(() => {

   const importingMaps = async() => {
      const tt = await import("@tomtom-international/web-sdk-maps")
      let map = tt.map({
        key:'adAkl09WHcOiZEvvFkaGPPHrYtJF6Wz1',
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

    window.addEventListener('scroll', handleScrolling)

  },[])


  return (
    <div>
       {/* <Head>
            <meta http-equiv='X-UA-Compatible' content='IE=Edge' ></meta>
            <title>Your best drive</title>
            <meta name='viewport'
                content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'></meta>
            <link rel='stylesheet' type='text/css' href='/cdn.web-sdk-maps/maps.css'></link>
            <link rel='stylesheet' type='text/css' href='../assets/ui-library/index.css'></link>
            <link rel='stylesheet' type='text/css' href='/cdn.web-sdk-plugin-searchbox/SearchBox.css'></link>
            <link rel='stylesheet' type='text/css' href='../assets/ui-library/icons-css/poi.css'></link>
        </Head> */}
      <Header />
      <div id='search-wrapper-ordering' className='pt-[50px] relative h-screen'>
          <div ref={MapElement} className={`w-screen h-[55vh] overflow-hidden`}></div>
            <div className={`bg-white w-screen h-[350px] rounded-t-[40px] z-20 absolute bottom-0`}>
              <Search/>
              <Chooseparams />
            <Link href="#specifics">
              <div ref={GoForMore} className="absolute w-screen h-[120px] bg-white bottom-[60px] z-20 flex justify-center items-start">
              <div className='flex justify-center px-[20px] h-[50px] border items-center rounded-[30px] bg-yellow-500 text-white'>
                  <MdOutlineKeyboardArrowDown className="h-[35px] w-[35px] left-0 right-0 mx-auto duration-700"/>
                <div className='h-[30px] text-[20px]'>Go to specifics</div>
              </div>
            </div>
            </Link>
      </div>
      </div>
    </div>
  )
}
