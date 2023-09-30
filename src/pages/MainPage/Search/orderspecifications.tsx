import React, {useContext, useState, useRef} from 'react'
import { AppContext } from '../../_app'
import countries from "../../../data/countries.json"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function Orderspacifications() {

    const {queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime, people, setPeople} = useContext(AppContext)

    const CodeLists:any = useRef();

    const [data, setData] = useState([
      {country:"Poland"},
      {code:"+48"},
      {emoji:"🇦🇬"},
    ])

    const handleAddingNewData = (i:any) => {
      setData([{country: i.name}, {code: i.dial_code}, {emoji: i.emoji}])
    }

    const handleShowList = () => {
      console.log(CodeLists.current.style.display)
      if (CodeLists.current.style.display === "" || CodeLists.current.style.display === "none"){
        console.log("ok")
         CodeLists.current.style.display = "block"
         return true
      }

      if (CodeLists.current.style.display === "block"){
        CodeLists.current.style.display = "none"
        return true
     }
    
    }

    console.log(data[1])

    const countriesMap = countries.map(i => {
      return (
        <>
          <li className="flex w-full" onClick={() => handleAddingNewData(i)} >
            <div className='w-[30px]'>{i.emoji}</div>
            <div>{i.name}</div>
            <div className='mx-[8px]'>{i.dial_code}</div>
          </li>
        </>
      )
    })

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
        <input placeholder='First name' className='border-2 w-full pl-[4px] h-[40px] mb-[20px] rounded-[10px] placeholder-black'></input>
        <input placeholder='Last name' className='border-2 w-full pl-[4px] h-[40px] mb-[20px] rounded-[10px] placeholder-black'></input>
        <input placeholder='Your email' className='border-2 w-full pl-[4px] h-[40px] mb-[20px] rounded-[10px] placeholder-black'></input>
        <div className='flex h-[40px] w-full relative'>
          <div 
            role="combobox" 
            className='border h-[40px] w-[90px] bg-white flex items-center justify-center rounded-l-[10px]'
            onClick={handleShowList}>
            <div className="pr-[4px]">{data[2].emoji}</div>
            {data[1].code}
            <MdOutlineKeyboardArrowDown />
          </div>
          <ul ref={CodeLists} role="listbox" className="hidden absolute border w-full top-[40px] h-[150px] overflow-y-scroll px-[5px] bg-white">{countriesMap}</ul>
            <input placeholder='Your phone (only digists)' className='border-2 w-full pl-[4px] h-[40px] mb-[20px] rounded-r-[10px] placeholder-black' type="phone"></input>
        </div>
      </div>
    </div>
  )
}
