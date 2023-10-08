import  React, { useRef, useState, useEffect, Component, useContext, useCallback } from 'react';
import { useRouter } from 'next/router';

//icons
import { MdLocalAirport, MdPlace, MdHotel, MdDirectionsCar, MdAttachMoney, MdLocalParking } from 'react-icons/md'
import { LiaHotelSolid } from 'react-icons/lia'
import { IoMdRestaurant} from 'react-icons/io'
import { BiSolidMap } from 'react-icons/bi'
import { AiFillCloseSquare } from 'react-icons/ai'
import { AppContext } from './_app'

type Function = {
  ShowOrHideInfoAboutMissingLocalizations:() => void;
}

export default function TomTom({ShowOrHideInfoAboutMissingLocalizations}: Function) {

  const router = useRouter();
  const [dataFromFetch, setDataFromFetch] = useState(null);
  const {queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime, people, setPeople, latLangFrom, setlatLangFrom, latLangTo, setlatLangTo, calculateDistance, setCalculateDistance, isFormCompleted, setIsFromCompleted,mapLongitude, setMapLongitude, mapLatitude, setMapLatitude, mapUpdated, setMapUpdated} = useContext(AppContext)

  const [dataToFetch, setDataToFetch] = useState(null);
  const [activeQuery, setActiveQuery] = useState("")

  const FromList:any = useRef();
  const inputFrom:any = useRef();
  const inputTo:any = useRef();
  const ToList:any = useRef();
  const clearFrom:any = useRef();
  const clearTo:any = useRef();
  const suggest:any = useRef();

  const handleSearchFrom = (e:any) => {
    // console.log("From: "+ e.target.value)
    setQueryFrom(e.target.value)
    FromList.current.style.display = "block"
    setActiveQuery("From")
    setlatLangFrom(null)
  }

  const handleSearchTo = (e:any) => {
    // console.log("To: " + e.target.value)
    setlatLangTo(null)
    setQueryTo(e.target.value)
    ToList.current.style.display = "block"
    setActiveQuery("To")
  }

  const handleChosingParam = (e:any, i:any) => {

    console.log(e.target.id)
   
    if(e.target.id === "From"){
      setMapUpdated(true)
      console.log(i.position.lat)
      setMapLatitude(i.position.lat)
      setMapLongitude(i.position.lon)
      setlatLangFrom([i.position.lat, i.position.lon])
      setQueryFrom(e.target.getAttribute('data-name'))
      FromList.current.style.display = "none"

    }
    if(e.target.id === "To"){
      setlatLangTo([i.position.lat, i.position.lon])
      setQueryTo(e.target.getAttribute('data-name'))
      ToList.current.style.display = "none"
    }

    ShowOrHideInfoAboutMissingLocalizations();
  }

  const calculateDistances = useCallback(() => {
    if(latLangFrom !== null && latLangTo !== null) {

      console.log(latLangFrom, latLangTo)
      let data = fetch(`https://api.tomtom.com/routing/1/calculateRoute/${latLangFrom}:${latLangTo}/json?key=cjmuWSfVTrJfOGj7AcXvMLU8R8i1Q9cF`,{
      method:"GET"
      })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setCalculateDistance(Math.round(data.routes[0].summary.lengthInMeters / 1000))
    })
    } else {
      setCalculateDistance(null)
    }

  },[latLangFrom, latLangTo])

  const handleShowingList = (e:any) => {
    const RefName = e.target.name
    if(e.target.name === "from"){
       FromList.current.style.display = "block"
       setActiveQuery("From")
    }
    if(e.target.name === "to"){
      ToList.current.style.display = "block"
      setActiveQuery("To")
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

  // handling X (clear) buttons in localization inputs
  const clearFromQuery = () => {
    setQueryFrom("")
    setlatLangFrom(null)
  }

  const clearToQuery = () => {
    setQueryTo("")
    setlatLangTo(null)
  }
  //END of handling X (clear) buttons in localization inputs


  console.log(dataFromFetch)

  useEffect(() => {

    let query;
    if(activeQuery === "From") {
      query = queryFrom
    } 

    if(activeQuery === "To") {
      query = queryTo
    } 

    const res:any = fetch(
      `https://api.tomtom.com/search/2/search/${query}.json?key=cjmuWSfVTrJfOGj7AcXvMLU8R8i1Q9cF&setCountry=PL&limit=5&language=en-US`
      ,{
    method:"GET"
      })

      .then(res => res.json())
      .then(resData => {
        return resData.results.filter((i:any) => i.type !== "Geography")
        // console.log(resData)
      })
      .then(data => {
        // console.log(data)
        const newData = data.map((i:any) => {
          console.log(i)
          let icon
          let POI
          let StreetName = i.address.streetName
          let StreetNumber = 2
          let City = i.address.municipality
          let {lat,lon} = i.position

            //Contions to show icon
            if(i.type === "POI") {
              StreetNumber = i.address.streetNumber
              POI = i.poi.name
            }
            if(i.type === "Street") {
              POI = `${StreetName},${StreetName}`

            } 
            if(i.type === "Point Address") {
              StreetNumber = i.address.streetNumber
              POI = `${City}, ${StreetName} ${StreetNumber}`
            } 
            else {
              StreetNumber = i.address.streetNumber
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
              )  
            {
              icon = <MdPlace className='h-full'/>
            }
            }
            //END - Contions to show icon

            return (
            <div 
              key={i}
              ref={suggest}
              id={activeQuery}
              data-name={POI} data-value-lat={lat} data-value-lon={lon}
              className='flex w-full border-b py-[5px] rounded-[10px] px-[10px] duration-200 hover:bg-blue-400 hover:text-white cursor-pointer overflow-hidden'
              onClick={(e:any) => handleChosingParam(e,i)}
            > 
                <div 
                  ref={suggest}
                  // onClick={(e:any) => handleChosingParam(e,i)}
                  id={activeQuery}
                  data-name={POI} 
                  className='w-[30px] h-full p-[5px] flex justify-center items-center'>{icon}</div>
                <div 
                  ref={suggest}
                  // onClick={(e:any) => handleChosingParam(e,i)}
                  id={activeQuery}
                  data-name={POI}
                  className='flex flex-col w-full justify-center'>
                <div 
                  ref={suggest}
                  // onClick={(e:any) => handleChosingParam(e,i)}
                  id={activeQuery}
                  data-name={POI}
                  className='font-bold text-[13px] w-full leading-[12px]'>{POI}</div>
                <div
                  ref={suggest}
                  // onClick={(e:any) => handleChosingParam(e,i)} 
                  id={activeQuery}
                  data-name={POI} 
                  className='text-[10px] w-full z-20 leading-[12px]'>
                  {StreetName} {StreetNumber}, {City}
                </div>
                  {/* <p className='text-[10px] bg-blue-800 text-white pl-[10px] w-full'>{i.poi.categories[0]}</p> */}
            </div>
          </div>
          )
        })

        // console.log("po")
        // console.log(suggest.current)
      

        if(activeQuery === "From") {
          setDataFromFetch(newData)
        } 
        if(activeQuery === "To") {
          setDataToFetch(newData)
        } 
      })
      .catch((err) => console.log(err))


  },[queryFrom, queryTo, latLangFrom, latLangTo])

  useEffect(() => {
    calculateDistances()
  },[latLangFrom, latLangTo])

    return (
        <div className='flex flex-col w-full justify-around'>
          <div className='w-full h-[47px] flex flex-col rounded-r-[10px] relative'>
            <div className='flex justify-center items-center'>
              <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
              <div onClick={clearFromQuery} ref={clearFrom} className={(queryFrom.length > 1 && queryFrom !== null) ? 'bg-white absolute w-[40px] h-[40px] right-0 z-10 flex items-center duration-200 justify-center text-gray-300 hover:text-gray-800' : "hidden"}>
              <AiFillCloseSquare className="w-[90%] h-[90%]" />
              </div>
              <input 
                ref={inputFrom}
                name="From"
                // onBlur={handleHidingList}
                value={queryFrom}
                onFocus={handleShowingList}
                onChange={handleSearchFrom}
                className='text-[15px] w-full min-h-[45px] outline-none rounded-[10px] pl-[5px] pr-[50px] overflow-ellipsis' 
                placeholder='from'
                autoComplete='off'></input>
            </div>
            <div 
              // onMouseDown={(e) => e.preventDefault()}
              ref={FromList} 
              className={(queryFrom.length > 4 && queryFrom !== null && inputFrom.current === document.activeElement) ? 'absolute w-[102%] -left-[1%] top-[50px] border-2 border-yellow-500 rounded-[10px] bg-white z-30' : 'hidden overflow-hidden'}>{dataFromFetch}</div>
          </div>
          <div className='h-[1px] bg-gray-400/[0.3] w-11/12 mx-auto'></div>
          <div className='w-full h-[47px] flex flex-col z-20 rounded-r-[10px] relative'>
            <div className='flex justify-center items-center'>
              <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
                <div onClick={clearToQuery} ref={clearTo} className={(queryTo.length > 1 && queryTo !== null) ? 'bg-white absolute w-[40px] h-[40px] right-0 z-10 flex items-center duration-200 justify-center text-gray-300 hover:text-gray-800' : "hidden"}>
                <AiFillCloseSquare className="w-[90%] h-[90%]" />
              </div>
              <input 
                ref={inputTo}
                name="to" 
                onBlur={handleHidingList}
                value={queryTo} 
                onFocus={handleShowingList} 
                onChange={handleSearchTo} 
                className='text-[15px] w-full min-h-[45px] outline-none rounded-[10px] pl-[5px] pr-[50px] overflow-ellipsis' 
                placeholder='to'
                autoComplete='off'>
              </input>
            </div>
            <div 
              ref={ToList} 
              className={(queryTo.length > 4 && queryTo !== null && inputTo.current === document.activeElement) ? 'absolute w-[102%] -left-[1%] top-[50px] border-2 border-yellow-500 rounded-[10px] bg-white' : 'hidden overflow-hidden'}
              onMouseDown={(e) => e.preventDefault()} >{dataToFetch}</div>
          </div>
        </div>  
     
  )
}
