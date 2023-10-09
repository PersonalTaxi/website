import React, { useEffect, useLayoutEffect, Component, useContext, useRef, useState, useCallback } from 'react'
import Chooseparams from './chooseparams'
import Header from '../Header/header'
import Search from '../MainPage/Search/search'
import Link from 'next/link'
import Head from 'next/head'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {BiSolidMap} from 'react-icons/bi'
import Footer from '../Footer/footer'
import { AppContext } from '../_app'

export default function Summary() {

  const {latLangFrom, setlatLangFrom, mapLongitude, setMapLongitude, mapLatitude, setMapLatitude, mapUpdated, setMapUpdated,SearchButtonWasClicked, setSearchButtonWasClicked} = useContext(AppContext)

  // console.log(latLangFrom[1])

  setSearchButtonWasClicked(true)

  const [map, setMap] = useState({});
  const MapElement:any = useRef();
  const GoForMore:any = useRef();

  // const handleScrolling = () => {
  //   if(window.scrollX < 230){
  //     GoForMore.current.style.display =  "none"
  //   }
  // }


  // useEffect(() => {

  //   const updateMap = () => {
  //     console.log("lala")
  //     map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)])
  //     setMapUpdated(false)
  //   }

  //   let map = fetch("https://api.tomtom.com/map/1/tile/basic/main/0/0/0.pbf?key=adAkl09WHcOiZEvvFkaGPPHrYtJF6Wz1&view=Unified&language=NGT", {
  //   method:"GET"})
  //   .then(res => console.log(res.body))


  //  const importingMaps = async() => {
    
  //     const tt = await import("@tomtom-international/web-sdk-maps")
  //         // setMapUpdated(false)
  //         let map = await tt.map({
  //           key:'adAkl09WHcOiZEvvFkaGPPHrYtJF6Wz1',
  //           container: MapElement.current,
  //           stylesVisibility:{
  //             trafficIncidents:true,
  //             trafficFlow:true,
  //           },

  //       center:[mapLongitude, mapLatitude],
  //       zoom:10
        
  //     })

  //     console.log(mapUpdated)

  //     setMap(map)
  //     if(mapUpdated === true) {
  //       updateMap();
  //     }
      
  //     return () => map.remove()
       
  //  }

  //   importingMaps()

  //   window.addEventListener('scroll', handleScrolling)

  // },[mapUpdated])



  return (
    <div>
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
      <div id='search-wrapper-ordering' className='pt-[100px] relative h-[1600px] bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat bg-fixed'>
        <div className={`w-screen h-[350px] rounded-t-[40px] z-20 bottom-0`}>
          <Search/>
          <Chooseparams />
        </div>
      </div>
      <Footer />
    </div>
  )
}
