import React, {useContext} from 'react'
import { AppContext } from '../../_app'

export default function Orderspacifications() {

    const {queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime, people, setPeople} = useContext(AppContext)

  return (
    // As form element
    <div className='bg-white w-[90vw] mx-auto mt-[20px] border-t pt-[15px]'>
      <div className='w-11/12 mx-auto'>
      <p className='mb-[25px] text-[20px] font-bold'>A few informations about you: </p>
        <div className='flex mb-[25px]'>
          <div className='w-[70px]'>
            <input name="title" type="radio" className='mr-[4px]'></input>
            <label>Mr.</label>
          </div>
          <div className='w-[70px]'>
            <input name="title" type="radio" className='mr-[4px]'></input>
            <label>Mrs.</label>
          </div>
        </div>
        <input placeholder='First name' className='border-2 w-full pl-[4px] h-[40px] mb-[25px] rounded-[5px] placeholder-black'></input>
        <input placeholder='Last name' className='border-2 w-full pl-[4px] h-[40px] mb-[25px] rounded-[5px] placeholder-black'></input>
        <input placeholder='Your email' className='border-2 w-full pl-[4px] h-[40px] mb-[25px] rounded-[5px] placeholder-black'></input>
      </div>
    </div>
  )
}
