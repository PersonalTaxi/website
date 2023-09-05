import React, { useState, useRef } from 'react'
import {BiSolidMap} from 'react-icons/bi'
import {BsCalendar3} from 'react-icons/bs'
import {TbClockHour8} from 'react-icons/tb'
import Cities from '../../../data/cities.json'
import Calendar  from 'react-calendar'

export default function Search() {

    const dataFrom:any = useRef();
    const dataTo:any = useRef();

    const [list, setList] = useState(JSON.parse(JSON.stringify(Cities.cities)))
    const [choosedLocalizationFrom, setChoosedLocalizationFrom] = useState();
    const [choosedLocalizationTo, setChoosedLocalizationTo] = useState();



    const handleChooseLocalization = (e) => {

        const name = e.target.getAttribute("name")
        const value = e.target.getAttribute("value")


        if(name === "From"){
            setChoosedLocalizationFrom(value)
            handleOnBlurInputFrom()
        } else {
            setChoosedLocalizationTo(value)
            handleOnBlurInputTo()
        }
    }


    const CitiesList = list.map(city => {
        return (
            <div key={city}  className='w-full'>
                <div name="From" value={city} className='w-full text-[20px] py-[2px]' onClick={handleChooseLocalization} onMouseDown={(e) => e.preventDefault()}>{city}</div>
            </div>
        )

    })

    const handleFocusInputFrom = () =>  {
        dataFrom.current.style.display = "block"

    }

    const handleOnBlurInputFrom = () =>  {
        dataFrom.current.style.display = "none"

    }

    const handleFocusInputTo = () =>  {
        dataTo.current.style.display = "block"

    }

    const handleOnBlurInputTo = () =>  {
        dataTo.current.style.display = "none"

    }

    
  return (
    <div className='w-screen h-[30vh] border-blue-900 z-10'>
        <div id="search-wraper" className='w-full flex flex-col justify-start items-center'>
            <div id="search-contianer-text" className='w-11/12 px-[30px]'>
                <div className='w-[120px] bg-white text-center rounded-t-[10px]'>Your drive:</div>
            </div>
            <div id="search-contianer" className='bg-white w-11/12 rounded-t-[15px] h-auto'>
                <form className='w-full h-[300px] flex flex-col justify-evenly items-center mx-auto border-red-900'>
                    <div id="form-inputs-wraper" className='w-full h-[250px] flex flex-col justify-evenly items-center mx-auto border-red-900'>
                        <div id="from-to" className="rounded-[10px] h-[100px] w-10/12 border relative">
                            <div ref={dataFrom} className='absolute w-full border h-[150px] top-[50px] bg-white hidden overflow-scroll'>{CitiesList}</div>
                                <div id="icon-input-wraper" className='h-[49%] rounded-[10px] w-full flex items-center pl-[10px]'>
                                    <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
                                    <input className='w-full h-full rounded-[10px] pl-[5px]' placeholder='From:' onFocus={handleFocusInputFrom} onBlur={handleOnBlurInputFrom}></input>
                                </div>
                            <div className='h-[1px] bg-gray-400/[0.3] w-11/12 mx-auto relative'></div>
                                <div ref={dataTo} className='absolute w-full border h-[150px] top-[100px] bg-white hidden overflow-scroll'>{CitiesList}</div>
                                <div id="icon-input-wraper" className='h-[49%] rounded-[10px] w-full flex items-center pl-[10px]'>
                                    <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
                                    <input className='w-full h-full rounded-[10px] pl-[5px]' placeholder='To:' onFocus={handleFocusInputTo} onBlur={handleOnBlurInputTo}></input>
                                </div>
                            </div>
                        <div id="schedule-in-calendar" className="rounded-[10px] h-[50px] w-10/12 border flex flex-no-wrap">
                            <div className="h-[50px] w-1/2 border-r flex items-center pl-[10px] relative">
                            {/* <Calendar className='absolute bg-white border w-[280px]'/> */}
                                {/* <BsCalendar3 locale="en_EN" className="w-[30px] h-[30px] text-yellow-500/[0.4]"/> */}
                                <input className='w-[100px] h-[45px] pl-[5px] apperance-none' placeholder='Date' type="date"></input>
                            </div>
                            <div className="h-[50px] w-1/2 flex items-center justify-center pl-[10px]">
                                {/* <TbClockHour8 className="w-[30px] h-[30px] text-yellow-500/[0.4]"/> */}
                                <input className='w-[100px] h-[45px] pl-[5px]' placeholder='Hour' type="time"></input>
                            </div>
                        </div>
                        <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-10/12 flex justify-between">
                            <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-6/12 border"></div>
                            <button id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-5/12 border uppercase bg-black text-yellow-400">See offers</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
