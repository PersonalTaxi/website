import React, {useContext, useState, useRef} from 'react'
import { AppContext } from '../../_app'
import countries from "../../../data/countries.json"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function Orderspacifications() {

    const {queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime, people, setPeople,
    //client's data
    firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail} = useContext(AppContext)

    const CodeLists:any = useRef();

    const [data, setData] = useState([
      {country:"Poland"},
      {code:"+48"},
      {emoji:"🇵🇱"},
    ])

    const [countryCallCode, setCountryCallCode]:any = useState();

    const handleAddingNewData = (i:any) => {
      setData([{country: i.name}, {code: i.dial_code}, {emoji: i.emoji}])
    }
    
    const countriesData = countries.sort()

    const countriesMap = countriesData.map(i => {
      return (
          <option key={i.name} className="flex w-full justify-center">
            <div className='w-[30px]'>{i.emoji}</div>
            {/* <div>{i.name}</div> */}
            <div className='mx-[8px]'> {i.dial_code}</div>
          </option>
      )
    })

  return (
    // As form element
    <div className='bg-white w-full mx-auto mt-[20px] border-t pt-[15px]'>
      <div className='w-11/12 mx-auto'>
      <p className='mb-[25px] text-[20px] font-bold'>A few informations about you: </p>
        <div className='flex mb-[25px]'>
          <div className='w-[70px] flex items-center'>
            <input 
              name="title" 
              type="radio" 
              className='mr-[4px] w-[20px] h-[20px]'
              required></input>
            <label>Mr.</label>
          </div>
          <div className='w-[70px] flex items-center'>
            <input 
              name="title" 
              type="radio" 
              className='mr-[4px] w-[20px] h-[20px]'
              required>
            </input>
            <label>Mrs.</label>
          </div>
        </div>
        <input 
          placeholder='First name' 
          className='border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none' required
          onChange={(e) => setFirstName(e.target.value)}>
        </input>
        <input 
          placeholder='Last name' 
          className='border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none' required
          onChange={(e) => setLastName(e.target.value)}>
        </input>
        <input 
          placeholder='Your email'
          className='border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none' required
          onChange={(e) => setEmail(e.target.value)}>
        </input>
        <div className='flex h-[40px] w-full relative'>
          <select onChange={handleAddingNewData}
            className='border h-[40px] w-[120px] flex items-center justify-center rounded-l-[5px] bg-gray-100 border-gray-400'
            >
            {countriesMap}
            <MdOutlineKeyboardArrowDown />
          </select>
            <input 
              placeholder='Your phone (only digists)' 
              className='border-r border-t border-b border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-r-[5px] placeholder-gray-400 outline-none' type="phone" required
              onChange={(e) => setPhone(e.target.value)}>
            </input>
        </div>
        <div className='w-full flex items-start p-[5px]'>
              <input type="checkbox" required className='w-[30px] h-[30px] mr-[5px]'></input>
              <p className='leading-4'>I accept the privacy policy and agree to contact and realize my order.</p>
            </div>
      </div>
    </div>
  )
}
