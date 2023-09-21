import React,{useContext, useReducer, useRef, useState} from 'react'
import cars from "../../data/cars.json"
import Image from 'next/image'
import {BsFillPersonFill, BsFillBagFill} from 'react-icons/bs'
import { AppContext } from '../_app'
import { useRouter } from 'next/router'

//icons
import {MdFlightLand} from 'react-icons/md'
import {AiFillInfoCircle} from 'react-icons/ai'
import {AiOutlineClose, AiOutlineFieldTime} from 'react-icons/ai'
import {MdOutlinePersonPinCircle} from 'react-icons/md'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {BiSolidUpArrow, BiSolidDownArrow} from 'react-icons/bi'

function reducer(state:any, action:any) {

    switch(action.type){
        case "increment-sedan":
            if(state.sedan >= 0)
            return {sedan: state.sedan + 1, van:state.van }
        
        case "decrement-sedan":
            if(state.sedan >= 0)
            return {sedan: state.sedan - 1,van:state.van }
        
        case "increment-van":
            if(state.van >= 0)
            return {van: state.van + 1, sedan: state.sedan }
            
        case "decrement-van":
            if(state.van >= 0)
            return {van: state.van - 1, sedan: state.sedan }
    } 
  }

    const CarsData = {sedan:1, van:0}

export default function Carcomponents() {

    const [state, dispatch] = useReducer(reducer, CarsData);
    const CarsInfo:any = useRef();

    function incrementSedan() {
        dispatch({type: "increment-sedan"})

    }

    function decrementSedan() {
        dispatch({type: "decrement-sedan"})

    }
    function incrementVan() {
        dispatch({type: "increment-van"})

    }

    function decrementVan() {
        dispatch({type: "decrement-van"})

    }

    const [van, setVan] = useState(0);

    const handleFlightinfo:any = useRef();
    const router = useRouter();
    const { passengers } = router.query
    let passenger:any = ""

        if(passengers !== undefined) {
            passenger = passengers
        } else {
            passenger = 1
        }
    
    let PersonsLeft = passenger - (state.sedan * 4 + state.van * 8)
        
    const Car = cars.cars.map((i:any) => {

        let CarType = ""

        passengers

        if(passenger < 5){
            CarType = "Sedan"
        }

        if(passenger >= 5){
            CarType = "Van"
        }

        const handleShowInfoAboutFlight= () => {
            handleFlightinfo.current.style.display = "block"
    
        }
        const handleHideInfoAboutFlight= () => {
            handleFlightinfo.current.style.display = "none"
    
        }


        if(i.type === CarType){
        return (
            <div key={i} className='flex border-blue-900 w-[90vw] rounded-xl h-[400px] mx-auto flex-wrap'>
            <div id="photo" className='border-red-900 w-5/12 h-[180px] relative'>
                <Image className='object-contain'
                    src={i.photo}
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
            <div className=' border-red-900 h-[150px] w-[80%] mx-auto relative'>
                <div ref={handleFlightinfo} className='hidden -top-[70px] p-[9px] w-[85%] left-0 absolute bg-white border rounded-[10px] shadow-xl'>
                    <AiOutlineClose className="w-[20px] h-[20px] float-right" onClick={handleHideInfoAboutFlight}/>
                    <p>By writing down number of your flight we will be able to monitoring departures time and get your from the airport at right time. After departure our waiting time is up to 60 mins.</p>
                </div>
                <div className=' border-blue-900 w-full h-[30px] flex items-center'>
                    <MdOutlinePersonPinCircle className='h-[30px] w-[30px] px-[4px] text-yellow-500'/>
                    <div className='border-gray-400 w-full'>We will find you?</div>
                </div>
                <div className=' border-blue-900 w-full h-[30px] flex items-center'>
                    <BiSolidPhoneCall className='h-[30px] w-[30px] px-[4px] text-yellow-500'/>
                    <div className='border-gray-400 w-full'>We will call you to find you</div>
                </div>
                <div className=' border-blue-900 w-full h-[30px] flex items-center'>
                    <AiOutlineFieldTime className='h-[30px] w-[30px] px-[4px] text-yellow-500'/>
                    <div className='border-gray-400 w-full'>Waiting time up to 60 mins. </div>
                </div>
                {/* <div className=' border-blue-900 w-full flex justify-between items-center mt-[20px]'>
                    <div className=' border-blue-900 w-full h-[40px] flex items-center'>
                        <MdFlightLand className='h-[40px] w-[40px] px-[4px] text-yellow-500'/>
                        <input className='border border-gray-400 w-full h-[40px]' placeholder=' Flight number e.g FR9847'></input>
                    </div>
                    <div id="info-icon" onMouseEnter={handleShowInfoAboutFlight} onMouseLeave={handleHideInfoAboutFlight}>
                        <AiFillInfoCircle className='h-[30px] w-[30px] px-[4px] text-yellow-500'/>
                    </div>
                </div> */}

                {/* <div className=' border-blue-900 w-full h-[70px] flex items-start flex-col mt-[20px] px-[4px]'>
                        <div className='text-[14px]'>Information for your driver:</div>
                        <textarea className='border border-gray-300 h-[50px] w-full' placeholder=' Your massage here'></textarea>
                    </div> */}
            </div>
            <div className='flex w-[80%] border-green-900 h-[50px] justify-end mx-auto'>
            <button className='flex border-green-900 h-[50px] px-[10px] py-[5px] bg-yellow-500 text-white items-center justify-center rounded-[10px]'>
                <p>Order for 139 €</p>
            </button>
            </div>
        </div>
        )
        }
    })

    const handleClosingTipWithCars = () => {
        CarsInfo.current.style.height = "0px"
        CarsInfo.current.style.padding = "0px"
        CarsInfo.current.style.overflow = "hidden"
    }

    console.log(CarsData)

    return (
        <div>
            {(PersonsLeft > 0) && <div className='bg-red-600 text-white w-[90vw] mx-auto px-[4px] rounded-[3px]'>Find a seats for {PersonsLeft} persons yet.</div>}
            {(passenger > 4) && <div ref={CarsInfo} onClick={handleClosingTipWithCars} className='duration-200 bg-white rounded-[10px] w-[90vw] h-[110px] mx-auto px-[5px] py-[2px] mb-[10px]'>
                <AiOutlineClose  className="float-right w-[20px] h-[20px]"/>
                <div >
                    <AiFillInfoCircle className="w-[20px] h-[20px] text-yellow-500"/>
                    <p className='w-[85%] mx-auto'>You are trying to reserve drive for <b>more than 4 people</b>, you may need more than one car. Choose number of cars below.</p>
                </div>
            </div>}
            <div id="choose-cars-wrapper" className={(passenger > 4) ? ' rounded-[10px] flex w-[90vw] mx-auto justify-between duration-200 mb-[12px] bg-white' : "h-[0px] overflow-hidden trasition-150 duration-200 mb-[12px] bg-white"}>
                <div className='rounded-[10px] h-[129px] w-[170px] bg-white flex'>
                    <div id="left-wrapper" className='w-[120px]'>
                        <div className='w-full'><p className=' text-center font-semibold pt-[4px]'>Eco Sedan</p></div>
                        <div className='relative w-full h-[60px]'>
                            <Image className='object-contain '
                                src="/mercedes.png"
                                fill
                                alt="sedan">
                            </Image>
                        </div>
                        <div className='w-full flex pl-[5px]'>
                            <BsFillPersonFill className="text-yellow-500" />
                            <p className=' text-center font-semibold text-[12px] pl-[5px]'>max 4 people</p></div>
                        <div className='w-full flex pl-[5px]'>
                            <BsFillBagFill className="text-yellow-500"/>
                            <p className=' text-center font-semibold text-[12px] pl-[5px]'>max 4 suitcases</p></div>
                        </div>
                    <div id="left-wrapper" className='w-[50px]'>
                        <div className='relative w-full h-[125px] flex items-center justify-around '>
                            <div>
                                <BiSolidUpArrow className='w-[30px] text-[40px]' onClick={incrementSedan}/>
                                    <div className='w-[30px] h-[20px] text-[20px] text-center leading-5'>{state.sedan}</div>
                                <BiSolidDownArrow className='w-[30px] text-[40px]' onClick={decrementSedan}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[1px] h-[100px] bg-gray-200 my-[10px]'></div>
                <div className='rounded-[10px] h-[125px] w-[170px] bg-white flex pt-[4px]'>
                    <div id="left-wrapper" className='w-[120px]'>
                        <div className='w-full'><p className=' text-center font-bold'>Mini Van</p></div>
                        <div className='relative w-full h-[60px]'>
                            <Image className='object-contain '
                                src="/Van.webp"
                                fill
                                alt="sedan">
                            </Image>
                        </div>
                        <div className='w-full flex pl-[5px]'>
                            <BsFillPersonFill className="text-yellow-500"/>
                            <p className=' text-center font-semibold text-[12px] pl-[5px]'>max 8 people</p></div>
                        <div className='w-full flex pl-[5px]'>
                            <BsFillBagFill className="text-yellow-500"/>
                            <p className=' text-center font-semibold text-[12px] pl-[5px]'>max 7 suitcases</p></div>
                        </div>
                    <div id="left-wrapper" className='w-[50px]'>
                        <div className='relative w-full h-[125px] flex items-center justify-around '>
                            <div>
                                <BiSolidUpArrow className='w-[30px] text-[40px]' onClick={incrementVan}/>
                                    <div className='w-[30px] h-[20px] text-[20px] text-center leading-5'>{state.van}</div>
                                <BiSolidDownArrow className='w-[30px] text-[40px]' onClick={decrementVan}/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <div className='bg-white w-[90vw] mx-auto p-[10px] rounded-t-[10px]'>{Car}</div>
        </div>
    )
}
