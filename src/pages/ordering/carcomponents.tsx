import React from 'react'
import cars from "../../data/cars.json"
import Image from 'next/image'
import {BsFillPersonFill, BsFillBagFill} from 'react-icons/bs'


export default function Carcomponents() {

    // console.log(cars)

    const Car = cars.cars.map((i:any) => {
        console.log(i)
        if(i.type === "Van"){
        return (
            <div key={i} className='flex border-blue-900 w-[90vw] rounded-xl h-[300px] mx-auto flex-wrap'>
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
