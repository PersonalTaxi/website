import React, { useEffect, Component, useContext } from 'react'
import { useRef, useState } from 'react';

//icons
import { MdLocalAirport, MdPlace, MdHotel, MdDirectionsCar, MdAttachMoney, MdLocalParking } from 'react-icons/md'
import { LiaHotelSolid } from 'react-icons/lia'
import { IoMdRestaurant} from 'react-icons/io'
import { BiSolidMap } from 'react-icons/bi'
import { AiFillCloseSquare } from 'react-icons/ai'

export default function TomTom() {

  const [dataFromFetch, setDataFromFetch] = useState(null);
  const [queryFrom, setQueryFrom] = useState("");

  const [dataToFetch, setDataToFetch] = useState(null);
  const [queryTo, setQueryTo] = useState("");
  const [activeQuery, setActiveQuery] = useState("")

  const FromList:any = useRef();
  const ToList:any = useRef();
  const clearFrom:any = useRef();
  const clearTo:any = useRef();
  const suggest:any = useRef();

  const handleSearchFrom = (e:any) => {
    // console.log(e.target.value)
    setQueryFrom(e.target.value)
    FromList.current.style.display = "block"
    setActiveQuery("From")
  }

  const handleSearchTo = (e:any) => {
    // console.log(e.target.value)
    setQueryTo(e.target.value)
    ToList.current.style.display = "block"
    setActiveQuery("To")
  }

  const handleChosingParam = (e:any) => {
    console.log(suggest.current.id)
    if(suggest.current.id === "From"){
      setQueryFrom(e.target.outerText)
      FromList.current.style.display = "none"
    }
    if(suggest.current.id === "To"){
      setQueryTo(e.target.outerText)
      ToList.current.style.display = "none"
    }
  }

  console.log(queryTo)

  useEffect(() => {

    let query;
    if(activeQuery === "From") {
      query = queryFrom
    } 

    if(activeQuery === "To") {
      query = queryTo
    } 

    // console.log(queryChanged)

    const res:any = fetch(
      `https://api.tomtom.com/search/2/search/${query}.json?key=cjmuWSfVTrJfOGj7AcXvMLU8R8i1Q9cF&setCountry=PL&limit=5&language=en-US`
      ,{
    method:"GET"
      })
      .then(res => res.json())
      .then(data => {
        const newData = data.results.map((i:any) => {
          // if(i.type !== "Geography")
          // console.log(i)

          let icon
          let POI
          let StreetName = i.address.streetName
          let StreetNumber = i.address.streetNumber
          let City = i.address.municipality
          let {lat, lon } = i.position

          // console.log(lat, lon)

            if(i.type === "POI") {
              POI = i.poi.name
            } else {
              POI = i.address.municipality
            }

            if(!i.poi) {
              icon = <MdPlace className='h-full'/>
            } else {
              if(i.poi.categories[0] === "airport") {
              icon =  <MdLocalAirport className='w-full h-full' />
            }
            if(i.poi.categories[0] === "hotel") {
              icon =  <LiaHotelSolid className='w-full h-full' />
            }
            if(i.poi.categories[0] === "rent-a-car facility") {
              icon =  <><MdDirectionsCar /><MdAttachMoney /></>
            }
            if(i.poi.categories[0].includes("parking")) {
              icon =  <MdLocalParking />
            } 
            if(i.poi.categories[0].includes("restaurant") || i.poi.categories[0].includes("fusion") || i.poi.categories[0].includes("italian")) {
              icon =  <IoMdRestaurant />
            } 
            else if(
              i.poi.categories[0] !== "airport" &&
              i.poi.categories[0] !== "hotel" &&
              i.poi.categories[0] !== "rent-a-car facility" && 
              !i.poi.categories[0].includes("parking") &&
              !i.poi.categories[0].includes("restaurant") &&
              !i.poi.categories[0].includes("fusion") &&
              !i.poi.categories[0].includes("italian")
              )  {
              icon = <MdPlace className='h-full'/>
            }
            }
            

          return (
            <div 
              key={i}
              ref={suggest}
              id={activeQuery} 
              className='flex w-[99%] border-b bg-white py-[5px] rounded-[2px] px-[10px] m-[0.5%] duration-200 hover:bg-blue-400 hover:text-white cursor-pointer overflow-hidden'
              onClick={handleChosingParam}>
                <div className='w-[30px] h-full p-[5px] flex justify-center items-center'>{icon}</div>
                <div className='flex flex-col w-full justify-center'>
                  <div className='font-bold text-[13px] w-full leading-[12px]'>{POI}</div>
                  {/* <div className='text-[10px] w-full z-20 leading-[12px]'>{i.address.municipality} </div> */}
                  <div className='text-[10px] w-full z-20 leading-[12px]'>{StreetName} {StreetNumber} {City}</div>
                  {/* <p className='text-[10px] bg-blue-800 text-white pl-[10px] w-full'>{i.poi.categories[0]}</p> */}
                </div>
            </div>
          )
        })

        if(activeQuery === "From") {
          setDataFromFetch(newData)
        } 
        if(activeQuery === "To") {
          setDataToFetch(newData)
        } 
      })
      .catch((err) => console.log(err))

  },[queryFrom, queryTo])


  const handleShowingList = (e:any) => {
    const RefName = e.target.name
    if(RefName === "from"){
       FromList.current.style.display = "block"
    }
    if(RefName === "o"){
      ToList.current.style.display = "block"
   }

  }

  const handleHidingList = (e:any) => {
    const RefName = e.target.name
    if(RefName === "from"){
       FromList.current.style.display = "none"
    }
    if(RefName === "to"){
      ToList.current.style.display = "none"
   }
  }

  const clearFromQuery = () => {
    setQueryFrom("")

  }

  const clearToQuery = () => {
    setQueryTo("")

  }

    return (
        <div className='flex flex-col w-full justify-around'>
          <div className='w-full h-[47px] flex flex-col rounded-r-[10px] relative'>
            <div className='flex justify-center items-center'>
              <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
              <div onClick={clearFromQuery} ref={clearFrom} className={(queryFrom.length > 1 && queryFrom !== null) ? 'bg-white absolute w-[40px] h-[40px] right-0 z-10 flex items-center duration-200 justify-center text-gray-300 hover:text-gray-800' : "hidden"}>
              <AiFillCloseSquare className="w-[90%] h-[90%]" />
              </div>
              <input 
                name="from" 
                onBlur={handleHidingList} 
                value={queryFrom} 
                onFocus={handleShowingList} 
                onChange={handleSearchFrom} 
                className='text-[18px] w-full min-h-[45px] outline-none rounded-[10px] pl-[5px] pr-[50px] overflow-ellipsis' 
                placeholder='from'
                autoComplete='off'></input>
            </div>
            <div 
              onMouseDown={(e) => e.preventDefault()}
              ref={FromList} 
              className={(queryFrom.length > 4 && queryFrom !== null) ? 'absolute w-[102%] -left-[1%] top-[50px] border-2 border-yellow-500 rounded-[10px] bg-white z-30' : 'hidden overflow-hidden'}>{dataFromFetch}</div>
          </div>
          <div className='h-[1px] bg-gray-400/[0.3] w-11/12 mx-auto'></div>
          <div className='w-full h-[47px] flex flex-col z-20 rounded-r-[10px] relative'>
            <div className='flex justify-center items-center'>
              <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
                <div onClick={clearToQuery} ref={clearTo} className={(queryTo.length > 1 && queryTo !== null) ? 'bg-white absolute w-[40px] h-[40px] right-0 z-10 flex items-center duration-200 justify-center text-gray-300 hover:text-gray-800' : "hidden"}>
                <AiFillCloseSquare className="w-[90%] h-[90%]" />
              </div>
              <input 
                name="to" 
                onBlur={handleHidingList} 
                value={queryTo} 
                onFocus={handleShowingList} 
                onChange={handleSearchTo} 
                className='text-[18px] w-full min-h-[45px] outline-none rounded-[10px] pl-[5px] pr-[50px] overflow-ellipsis' 
                placeholder='to'
                autoComplete='off'>
                </input>
            </div>
            <div 
              ref={ToList} 
              className={(queryTo.length > 4 && queryTo !== null) ? 'absolute w-[102%] -left-[1%] top-[50px] border-2 border-yellow-500 rounded-[10px] bg-white' : 'hidden overflow-hidden'}
              onMouseDown={(e) => e.preventDefault()} >{dataToFetch}</div>
          </div>
        </div>  
     
  )
}
