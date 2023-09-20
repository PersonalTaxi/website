import React,{useContext, useRef} from 'react'
import cars from "../../data/cars.json"
import Image from 'next/image'
import {BsFillPersonFill, BsFillBagFill} from 'react-icons/bs'
import { AppContext } from '../_app'
//icons
import {MdFlightLand} from 'react-icons/md'
import {AiFillInfoCircle} from 'react-icons/ai'


export default function Carcomponents() {

    const handleFlightinfo:any = useRef();

    const {passengers} = useContext(AppContext)

    const Car = cars.cars.map((i:any) => {

        let CarType = ""

        if(passengers < 5){
            CarType = "Sedan"
        }

        if(passengers >= 5){
            CarType = "Van"
        }

        const handleShowInfoAboutFlight= () => {
            handleFlightinfo.current.style.display = "block"
    
        }
        const handleHideInfoAboutFlight= () => {
            handleFlightinfo.current.style.display = "none"
    
        }


        console.log(i)
        if(i.type === CarType){
        return (
            <div key={i} className='flex border-blue-900 w-[90vw] rounded-xl h-[400px] mx-auto flex-wrap'>
            <div id="photo"className='border-red-900 border-red-900 w-5/12 h-[180px] relative'>
                <Image className='object-contain'
                    src={i.photo}
                    // width={200}
                    // height={200}
                    fill
                    alt="car">
                </Image>
            </div>
            <div id="wrapper" className='flex flex-col border-blue-900 w-7/12 h-[180px] p-[10px]'>
                <div id="car-model" className='text-[30px] font-bold'>{i.type}</div>
                <div id="number-of-persons">{i.name}, {i.model}</div>
                <div id="number-of-fits" className='flex items-center justify-start mt-[20px]'>
                    <BsFillPersonFill className="text-yellow-500 mr-[4px]"/><p>Seats for&nbsp;</p>{i.passengers}<p>&nbsp;people</p>
                </div>
                <div id="distance" className='flex items-center justify-start'>
                    <BsFillBagFill className="text-yellow-500 mr-[4px]"/><p>Fit&nbsp;</p>{i.fits}<p>&nbsp;suitcases</p>
                </div>
                <div id="Price-wrapper"></div>
            </div>
            <form className=' border-red-900 h-[120px] w-[80%] mx-auto relative'>
                <div ref={handleFlightinfo} className='hidden p-[4px] w-[85%] left-0 absolute bg-white border roudned-[10xp]'><p>Write down your flight number then we will be able to monitoring eventual departures time and get your from the airport at right time. After departure our waiting time is up to 60 mins.</p></div>
                <div className=' border-blue-900 w-full flex justify-between'>
                    <div className=' border-blue-900 w-full h-[30px] flex items-center'>
                        <MdFlightLand className='h-[30px] w-[30px] px-[4px]'/>
                        <input className='border border-gray-400 w-full' placeholder=' Flight e.g FR9847'></input>
                    </div>
                    <div id="info-icon" onMouseEnter={handleShowInfoAboutFlight} onMouseLeave={handleHideInfoAboutFlight}>
                        <AiFillInfoCircle className='h-[30px] w-[30px] px-[4px] text-yellow-500'/>
                    </div>
                </div>
                <div className=' border-blue-900 w-full h-[70px] flex items-start flex-col mt-[10px]'>
                        <div className='text-[12px]'>Information for your driver:</div>
                        <textarea className='text-[12px] border border-gray-300 h-[50px] w-full' placeholder=' Your massage here'></textarea>
                    </div>
            </form>
            <div className='flex w-[80%] border-green-900 h-[50px] justify-end mx-auto'>
            <button className='flex border-green-900 h-[50px] px-[10px] py-[5px] bg-yellow-500 text-white items-center justify-center rounded-[10px]'>
                <p>Order for 139 €</p>
            </button>
            </div>
        </div>
        )
        }
    })

    return (
        <div>
            <div className='bg-white w-[90vw] mx-auto p-[10px] rounded-t-[10px]'>{Car}</div>
        </div>
    )
}
