import React from 'react'
import {BiSolidMap} from 'react-icons/bi'
import {BsCalendar3} from 'react-icons/bs'
import {TbClockHour8} from 'react-icons/tb'

export default function Search() {
  return (
    <div className='w-screen h-[70vh] border-2 border-blue-900 z-10'>
        <div id="search-wraper" className='w-full h-full flex flex-col justify-start items-center'>
            <div id="search-contianer-text" className='w-11/12 px-[30px]'>
                <div className='w-[100px] bg-white text-center rounded-t-[7px]'>Your drive:</div>
            </div>
            <div id="search-contianer" className='bg-white w-11/12 rounded-t-[15px] h-full'>
                <form className='w-full h-[300px] flex flex-col justify-evenly items-center mx-auto border border-red-900'>
                    <div id="form-inputs-wraper" className='w-full h-[250px] flex flex-col justify-evenly items-center mx-auto border border-red-900'>
                        <div id="from-to" className="rounded-[10px] h-[100px] w-10/12 border">
                            <div id="icon-input-wraper" className='h-[49%] rounded-[10px] w-full flex items-center pl-[10px]'>
                                <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
                                <input className='w-full h-full rounded-[10px]' placeholder='From:'></input>
                            </div>
                            <div className='h-[1px] bg-gray-400/[0.3] w-11/12 mx-auto'></div>
                            <div id="icon-input-wraper" className='h-[49%] rounded-[10px] w-full flex items-center pl-[10px]'>
                                <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
                                <input className='w-full h-full rounded-[10px]' placeholder='To:'></input>
                            </div>
                        </div>
                        <div id="schedule-in-calendar" className="rounded-[10px] h-[50px] w-10/12 border flex flex-no-wrap">
                            <div className="h-[50px] w-1/2 border-r flex items-center pl-[10px]">
                                <BsCalendar3 className="w-[30px] h-[30px] text-yellow-500/[0.4]"/>
                                <input className='w-[100px] h-[45px]'></input>
                            </div>
                            <div className="h-[50px] w-1/2 flex items-center justify-center pl-[10px]">
                                <TbClockHour8 className="w-[30px] h-[30px] text-yellow-500/[0.4]"/>
                                <input className='w-[100px] h-[45px]'></input>
                            </div>
                        </div>
                        <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-10/12 border"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
