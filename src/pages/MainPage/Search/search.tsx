import React, { useState, useRef, useMemo, useCallback, useEffect, createContext } from 'react'
import AppContext  from '@/pages/_app'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import TomTom from '@/pages/tomtom'
import { useContext } from 'react'
import {BiSolidMap} from 'react-icons/bi'
import {BsCalendar3} from 'react-icons/bs'
import {TbClockHour8} from 'react-icons/tb'
import Cities from '../../../data/cities.json'
import Calendar  from 'react-calendar'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import Script from 'next/script'
import Head from 'next/head'

export default function Search() {

    const router = useRouter();

    const mapElement:any = useRef();

    const dataFrom:any = useRef();
    const dataTo:any = useRef();
    const DatePlaceholder:any = useRef();
    const TimePlaceholder:any = useRef();
    const [PersonsToDrive, setPersonsToDrive] = useState(2);

    const [list, setList] = useState(JSON.parse(JSON.stringify(Cities.cities)))


    const handleChooseLocalization = (e:any) => {

        // const name = e.target.getAttribute("data-name")
        // const value = e.target.getAttribute("data-value")

        // console.log(name)

        // if(name === "From"){
        //     setFromLocalization(value)
        //     handleOnBlurInputFrom()
        // } else {
        //     setToLocalization(value)
        //     handleOnBlurInputTo()
        // }
    }

    const handleFocusInputFrom = (e:any) =>  {
        dataFrom.current.style.display = "block"

    }

    const handleOnBlurInputFrom = () =>  {
        dataFrom.current.style.display = "none"

    }

    const handleFocusInputTo = (e:any) =>  {
        dataTo.current.style.display = "block"

    }

    const handleOnBlurInputTo = () =>  {
        dataTo.current.style.display = "none"

    }

    const handleHidePlaceholderDivDate = () =>  {
        DatePlaceholder.current.style.display = "none"

    }

    const handleHidePlaceholderDivTime = () =>  {
        TimePlaceholder.current.style.display = "none"

    }

    const handleDowncreaseNumber = useCallback(() => {
        if(PersonsToDrive > 1){
            return [setPersonsToDrive(PersonsToDrive -1)]
        }
        
    }, [PersonsToDrive])

    const handleIncreaseNumber = useCallback(() => {
        if(PersonsToDrive < 7){
            return [setPersonsToDrive(PersonsToDrive +1)]
        }
    }, [PersonsToDrive])

  return (
    <>
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
    <div className='w-screen h-[400px] border-blue-900 z-20'>
        <div id="search-wraper" className='w-full flex flex-col justify-start items-center'>
            <div id="search-contianer-text" className='w-11/12 px-[30px]'>
                <div className='w-[120px] bg-white text-center rounded-t-[10px]'>Your drive:</div>
            </div>
            <div id="search-contianer" className='bg-white w-11/12 rounded-[15px] h-auto'>
                <form className='w-full h-[300px] flex flex-col justify-evenly items-center mx-auto border-red-900'>
                    <div id="form-inputs-wraper" className='w-full h-[250px] flex flex-col justify-evenly items-center mx-auto border-red-900'>
                        <div id="from-to" className="rounded-[10px] h-[100px] w-10/12 border relative">
                                <div id="icon-input-wraper" className='h-full rounded-[10px] w-full flex items-center relative'> 
                                    <TomTom />
                                </div>
                            </div>
                        <div id="schedule-in-calendar" className="rounded-[10px] h-[50px] w-10/12 border flex flex-no-wrap">
                            <div className="h-[50px] w-1/2 border-r flex items-center pl-[10px] relative">
                            {/* <Calendar className='absolute bg-white border w-[280px]'/> */}
                                <div ref={DatePlaceholder} className='absolute w-9/12 h-full text-left leading-[50px] text-gray-900/[0.5] right-0 pl-[5px]'>Date</div>
                                <BsCalendar3 locale="en_EN" className="w-[30px] h-[30px] text-yellow-500/[0.4]"/>
                                <input id="data" className='w-full h-[45px] pl-[5px] outline-none z-10' placeholder='Date' type="date" onFocus={handleHidePlaceholderDivDate} ></input>
                            </div>
                            <div className="h-[50px] w-1/2 flex items-center justify-center pl-[10px] relative">
                                <div ref={TimePlaceholder} className='absolute w-9/12 h-full text-left leading-[50px] text-gray-900/[0.5] right-0 pl-[5px]'>Time</div>
                                <TbClockHour8 className="w-[30px] h-[30px] text-yellow-500/[0.4]"/>
                                <input className='w-full h-[45px] pl-[5px] outline-none appearance-none z-10' placeholder='Hour' type="time" onFocus={handleHidePlaceholderDivTime}></input>
                            </div>
                        </div>
                        <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-10/12 flex justify-between">
                            <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-6/12 border flex justify-center items-center">
                                <div className='w-[25px] h-[25px] rounded-[50%]' onClick={handleDowncreaseNumber}> 
                                    <AiOutlineMinus className="w-full h-full" />
                                </div>
                                <div className='w-[30px] h-[30px]'>
                                    <BsFillPersonFill className="w-full h-full text-yellow-400/[0.4]" />
                                </div>
                                <div className='w-[30px] h-[30px] text-[22px] leading-7 text-center duration-200'>{PersonsToDrive}</div>
                                <div className=' w-[25px] h-[25px] rounded-[50%]' onClick={handleIncreaseNumber}>
                                    <AiOutlinePlus className="w-full h-full"/>
                                </div>
                            </div>
                            <Link className="rounded-[10px] h-[50px] w-5/12" href="/ordering/summary" >
                                <button id="person-and-submit-wraper" className=" border-black rounded-[10px] h-[50px] w-full border-2 bg-black text-yellow-400 hover:text-black hover:bg-yellow-500 hover:border-yellow-500 duration-150">
                                    {!router.asPath.includes("ordering") ? <p>See offer</p> : <p>Update road</p>}
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
