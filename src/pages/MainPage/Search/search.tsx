import React, { useState, useRef, useMemo, useCallback, useEffect, useContext } from 'react'
import { AppContext }  from '@/pages/_app'
import { useRouter } from 'next/router'
import Link from 'next/link'
import TomTom from '@/pages/tomtom'
import {BiSolidMap} from 'react-icons/bi'
import {BsCalendar3} from 'react-icons/bs'
import {TbClockHour8} from 'react-icons/tb'
import Cities from '../../../data/cities.json'
import Calendar  from 'react-calendar'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillInfoCircle} from 'react-icons/ai'
import Script from 'next/script'
import Head from 'next/head'


export default function Search() {

    const {queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime, people, setPeople, latLangFrom, setlatLangFrom, latLangTo, setlatLangTo,calculateDistance, setCalculateDistance, isFormCompleted, setIsFromCompleted, SearchButtonWasClicked, setSearchButtonWasClicked} = useContext(AppContext)

    const router = useRouter();

    let passengersFromQuery:number = 2
    
    if(router.query.passengers === undefined) {
        //default value is 2
        passengersFromQuery = 2
    } else {
        passengersFromQuery = parseInt(router.query.passengers.toString())
    }

    console.log(SearchButtonWasClicked)

    const mapElement:any = useRef();
    const InfoAboutFillLocations = useRef<any | null>(null);

    const dataFrom:any = useRef();
    const dataTo:any = useRef();
    const DatePlaceholder:any = useRef();
    const TimePlaceholder:any = useRef();

    const handleHidePlaceholderDivDate = () =>  {
        // DatePlaceholder.current.style.display = "none"

    }

    const handleHidePlaceholderDivTime = () =>  {
        // TimePlaceholder.current.style.display = "none"

    }

    const handleDowncreaseNumber = useCallback(() => {
        if(people > 1){
            return [setPeople(people -1)]
        }
    }, [people])

    const handleIncreaseNumber = useCallback(() => {
        if(people < 40){
            return [setPeople(people +1)]
        }
    }, [people])

    const handleDate = (e:any) => {
        setDate(e.target.value)
    }

    const handleTime = (e:any) => {
        setTime(e.target.value) 
    }


    const ShowOrHideInfoAboutMissingLocalizations = () => {
        if(SearchButtonWasClicked === false){
            console.log("TRUE")
            InfoAboutFillLocations.current.style.display = "none"
        } 
        
        if(((latLangFrom === null && latLangTo === null) || (latLangFrom !== null && latLangTo === null) || (latLangFrom === null && latLangTo !== null)) && SearchButtonWasClicked === true){
            console.log("SECOND")
            InfoAboutFillLocations.current.style.display = "flex"
        }

        if((latLangFrom !== null && latLangTo !== null) && SearchButtonWasClicked === true){
            console.log("THIRD")
            InfoAboutFillLocations.current.style.display = "none"
        } 
    }

    const handleSendForm = (e:any) => {
        e.preventDefault();

        setSearchButtonWasClicked(true)

        if(latLangFrom !== null && latLangTo !== null){
            router.push({
                pathname:"/ordering/summary",
                query:{
                    passengers:people,
                },
            },undefined, {scroll:false})
    
        }
    }

    const MissingValuesChecking = useCallback(() => {
        console.log("DZIAŁA")
        console.log(SearchButtonWasClicked)
        ShowOrHideInfoAboutMissingLocalizations();
    }, [SearchButtonWasClicked, latLangFrom, latLangTo])


    console.log(passengersFromQuery)


    const CheckIfAllDataIsComplete = () => {

        console.log("In")
        let CompleteStatus:string = 'false'

        const Check = () => {
            if (queryFrom === "") return false
            console.log("QF")
            if (queryTo === "") return false
            console.log("QT")
            if (latLangFrom === null) return false
            console.log("LF")
            if (latLangTo === null) return false
            console.log("LT")
            if (passengersFromQuery !== people) return false
            console.log("Persons")

            CompleteStatus = 'true'
        }

        Check();
    
        console.log(CompleteStatus)
        
        if(CompleteStatus === 'true'){
            setIsFromCompleted(CompleteStatus)

        } else {
            setIsFromCompleted(CompleteStatus)
        }
    }


    useEffect(() =>{
        MissingValuesChecking();
        CheckIfAllDataIsComplete()
    })

  return (
    <>
    <Head>
        <meta http-equiv='X-UA-Compatible' content='IE=Edge' ></meta>
        <title>Your best drive</title>
        <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'></meta>
        <link rel='stylesheet' type='text/css' href='/cdn.web-sdk-maps/maps.css'></link>
        <link rel='stylesheet' type='text/css' href='../assets/ui-library/index.css'></link>
        <link rel='stylesheet' type='text/css' href='/cdn.web-sdk-plugin-searchbox/SearchBox.css'></link>
        <link rel='stylesheet' type='text/css' href='../assets/ui-library/icons-css/poi.css'></link>
    </Head>
    <div className='w-screen h-[320px] border-blue-900 z-20 mb-[12px]'>
        <div id="search-wraper" className='w-full flex flex-col justify-start items-center'>
            <div id="search-contianer-text" className='w-11/12 px-[30px]'>
                <div className='w-[120px] bg-white text-center rounded-t-[10px]'>Your drive:</div>
            </div>
            <div id="search-contianer" className='bg-white w-11/12 rounded-[15px] h-auto'>
                <form onSubmit={handleSendForm} className='w-full h-[320px] flex flex-col justify-evenly items-center mx-auto border-red-900'>
                    <div id="form-inputs-wraper" className='w-full h-[280px] flex flex-col justify-evenly items-center mx-auto border-red-900'>
                        <div id="from-to" className="rounded-[10px] h-[100px] w-10/12 border relative">
                                    <div id="icon-input-wraper" className='h-full rounded-[10px] w-full flex items-center relative'> 
                                        <TomTom ShowOrHideInfoAboutMissingLocalizations={ShowOrHideInfoAboutMissingLocalizations} />
                                    </div>
                            <div ref={InfoAboutFillLocations} className='hidden h-[25px] text-red-800 items-center'> 
                                <AiFillInfoCircle />
                                <div className='pl-[5px]'>Please fill localizations</div>
                            </div>
                        </div>
                        <div id="wrapper-for-bottom-search" className='w-10/12'>
                            {/* Date*/}
                            <div id="calendar-timer-wrapper" className="rounded-[10px] h-[50px] w-full border flex flex-no-wrap mb-[10px]">
                                <div className="h-[50px] w-1/2 border-r flex items-center pl-[10px] relative">
                                    {(date === "") && <div 
                                        ref={DatePlaceholder} 
                                        className='absolute w-9/12 h-[50px] text-left leading-[50px] text-gray-900/[0.5] right-0 pl-[5px]'>
                                            Date
                                    </div>}
                                    <BsCalendar3 locale="en_EN" className="w-[30px] h-[30px] text-yellow-500/[0.4]"/>
                                    <input 
                                        onChange={handleDate}
                                        id="data"
                                        className='w-full h-[45px] pl-[5px] outline-none z-10'
                                        placeholder='Date'
                                        type="date"
                                        onFocus={handleHidePlaceholderDivDate}
                                        value={date}
                                        required
                                    >
                                    </input>
                                </div>
                             {/* Time */}
                                <div className="h-[50px] w-1/2 flex items-center justify-center pl-[10px] relative">
                                {(time === "") && <div 
                                    ref={TimePlaceholder} 
                                    className='absolute w-full h-full text-left leading-[50px] text-gray-900/[0.5] right-0 pl-[5px]'>Time
                                </div>}
                                    <TbClockHour8 
                                        className="w-[30px] h-[30px] text-yellow-500/[0.4]"
                                    />
                                <input 
                                    className='w-full h-[45px] pl-[5px] outline-none appearance-none z-10' 
                                    onChange={handleTime}  
                                    placeholder='Hour' 
                                    type="time" 
                                    onFocus={handleHidePlaceholderDivTime}
                                    value={time}
                                    required>
                                </input>
                            </div>
                            </div>
                            {/* Persons do drive */}
                            <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-full flex justify-between">
                            <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-6/12 border flex justify-center items-center">
                                <div className='w-[25px] h-[25px] rounded-[50%]' onClick={handleDowncreaseNumber}> 
                                    <AiOutlineMinus className="w-full h-full" />
                                </div>
                                <div className='w-[30px] h-[30px]'>
                                    <BsFillPersonFill className="w-full h-full text-yellow-400/[0.4]" />
                                </div>
                                <div className='w-[30px] h-[30px] text-[22px] leading-7 text-center duration-200'>{people}</div>
                                <div className=' w-[25px] h-[25px] rounded-[50%]' onClick={handleIncreaseNumber}>
                                    <AiOutlinePlus className="w-full h-full"/>
                                </div>
                            </div>
                                <button id="person-and-submit-wraper" className=" border-black rounded-[10px] h-[50px] w-[130px] border-2 bg-black text-yellow-400 hover:text-black hover:bg-yellow-500 hover:border-yellow-500 duration-150">
                                    {(!router.asPath.includes("ordering")) ? <p>See offer</p> : <p>Update road</p>}
                                </button>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        {(latLangFrom !== null && latLangTo!== null) && <div className='w-[90vw] mx-auto text-center'>Drive distance {calculateDistance} km</div>}
        {(latLangFrom !== null || latLangTo!== null) && <div className='w-[90vw] mx-auto text-center'>Drive distance: wating for second localization ...</div>}
    </div>
    </>
  )
}
