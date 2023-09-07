import React, { useState, useRef, useMemo, useCallback } from 'react'
import {BiSolidMap} from 'react-icons/bi'
import {BsCalendar3} from 'react-icons/bs'
import {TbClockHour8} from 'react-icons/tb'
import Cities from '../../../data/cities.json'
import Calendar  from 'react-calendar'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import { Autocomplete, GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete,{getGeocode,getLatLng} from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxList, ComboboxPopover, ComboboxOption } from '@reach/combobox'
import "@reach/combobox/styles.css"

export default function Places() {
const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuxm3C_h_hXOoP7xg0Kh4pq-79AAYAV1I",
    libraries:['places']
    });


if (!isLoaded ) return <div>Loading...</div>;
return <Search />;

}

function Search() {

    const [selected, setSelected] = useState(null);

    const dataFrom:any = useRef();
    const dataTo:any = useRef();
    const DatePlaceholder:any = useRef();
    const TimePlaceholder:any = useRef();
    const [PersonsToDrive, setPersonsToDrive] = useState(2);

    const [list, setList] = useState(JSON.parse(JSON.stringify(Cities.cities)))
    const [choosedLocalizationFrom, setChoosedLocalizationFrom] = useState();
    const [choosedLocalizationTo, setChoosedLocalizationTo] = useState();


    const handleChooseLocalization = (e:any) => {

        const name = e.target.getAttribute("data-name")
        const value = e.target.getAttribute("data-value")

        console.log(name)

        if(name === "From"){
            setChoosedLocalizationFrom(value)
            handleOnBlurInputFrom()
        } else {
            setChoosedLocalizationTo(value)
            handleOnBlurInputTo()
        }
    }

    const CitiesListFrom = list.map((city:string) => {
        return (
            <div key={city}  className='w-full'>
                <div data-name="From" data-value={city} className='w-full text-[20px] py-[2px]' onClick={handleChooseLocalization} onMouseDown={(e) => e.preventDefault()}>{city}</div>
            </div>
        )

    })

    const CitiesListTo = list.map((city:string) => {
        return (
            <div key={city}  className='w-full'>
                <div data-name="To" data-value={city} className='w-full text-[20px] py-[2px]' onClick={handleChooseLocalization} onMouseDown={(e) => e.preventDefault()}>{city}</div>
            </div>
        )

    })

    const handleFocusInputFrom = (e:any) =>  {
        dataFrom.current.style.display = "block"

    }

    const handleOnBlurInputFrom = () =>  {
        dataFrom.current.style.display = "none"

    }

    const handleFocusInputTo = (e:any) =>  {
        dataTo.current.style.display = "block"

    }

    const handleOnBlurInputTo = () =>  {
        dataTo.current.style.display = "none"

    }

    const handleHidePlaceholderDivDate = () =>  {
        DatePlaceholder.current.style.display = "none"

    }

    const handleHidePlaceholderDivTime = () =>  {
        TimePlaceholder.current.style.display = "none"

    }

    const handleDowncreaseNumber = useCallback(() => {
        if(PersonsToDrive > 0){
            return [setPersonsToDrive(PersonsToDrive -1)]
        }
        
    }, [PersonsToDrive])


    const handleIncreaseNumber = useCallback(() => {
        if(PersonsToDrive < 7){
        return [setPersonsToDrive(PersonsToDrive +1)]
        }
    }, [PersonsToDrive])
 
  return (
    <div className='w-screen h-[30vh] border-blue-900'>
        <div id="search-wraper" className='w-full flex flex-col justify-start items-center'>
            <div id="search-contianer-text" className='w-11/12 px-[30px]'>
                <div className='w-[120px] bg-white text-center rounded-t-[10px]'>Your drive:</div>
            </div>
            <div id="search-contianer" className='bg-white w-11/12 rounded-t-[15px] h-auto mt-[50px]'>
                <form className='w-full h-[300px] flex flex-col justify-evenly items-center mx-auto border-red-900'>
                    <div id="form-inputs-wraper" className='w-full h-[250px] flex flex-col justify-evenly items-center mx-auto border-red-900'>
                        <div id="from-to" className="rounded-[10px] h-[100px] w-10/12 border relative">
                            <div ref={dataFrom} className='absolute w-full border h-[150px] top-[50px] bg-white hidden overflow-scroll z-10'>{CitiesListFrom}</div>
                                <div id="icon-input-wraper" className='h-[49%] rounded-[10px] w-full flex items-center pl-[10px]'>
                                    <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
                                    <div className='places-container'>
                                        <PlacesAutocompletFrom setSelected={setSelected} />
                                    </div>
                                    {/* <input className='w-full h-full rounded-[10px] pl-[5px] outline-none' placeholder='From:'
                                        onFocus={handleFocusInputFrom} 
                                        onBlur={handleOnBlurInputFrom}
                                        autoComplete="off"
                                        >
                                    </input> */}
                                </div>
                            <div className='h-[1px] bg-gray-400/[0.3] w-11/12 mx-auto relative'></div>
                                <div ref={dataTo} className='absolute w-full border h-[150px] top-[100px] bg-white hidden overflow-scroll z-10'>{CitiesListTo}</div>
                                <div id="icon-input-wraper" className='h-[49%] rounded-[10px] w-full flex items-center pl-[10px]'>
                                    <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
                                    <input className='w-full h-full rounded-[10px] pl-[5px] outline-none' placeholder='To:' value={choosedLocalizationTo} onFocus={handleFocusInputTo} onBlur={handleOnBlurInputTo} autoComplete="off" readOnly></input>
                                </div>
                            </div>
                        <div id="schedule-in-calendar" className="rounded-[10px] h-[50px] w-10/12 border flex flex-no-wrap">
                            <div className="h-[50px] w-1/2 border-r flex items-center pl-[10px] relative">
                            {/* <Calendar className='absolute bg-white border w-[280px]'/> */}
                                <div ref={DatePlaceholder} className='absolute w-9/12 h-full text-left leading-[50px] text-gray-900/[0.5] right-0 pl-[5px]'>Date</div>
                                <BsCalendar3 locale="en_EN" className="w-[30px] h-[30px] text-yellow-500/[0.4]"/>
                                <input id="data" className='w-full h-[45px] pl-[5px] outline-none' placeholder='Date' type="date" onFocus={handleHidePlaceholderDivDate} ></input>
                            </div>
                            <div className="h-[50px] w-1/2 flex items-center justify-center pl-[10px] relative">
                                <div ref={TimePlaceholder} className='absolute w-9/12 h-full text-left leading-[50px] text-gray-900/[0.5] right-0 pl-[5px]'>Time</div>
                                <TbClockHour8 className="w-[30px] h-[30px] text-yellow-500/[0.4]"/>
                                <input className='w-full h-[45px] pl-[5px] outline-none appearance-none z-10' placeholder='Hour' type="time" onFocus={handleHidePlaceholderDivTime}></input>
                            </div>
                        </div>
                        <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-10/12 flex justify-between">
                            <div id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-6/12 border flex justify-center items-center">
                                <div className='border-2 w-[30px] h-[30px] rounded-[50%]' onClick={handleDowncreaseNumber}> 
                                    <AiOutlineMinus className="w-full h-full" />
                                </div>
                                <div className='w-[30px] h-[30px]'>
                                    <BsFillPersonFill className="w-full h-full" />
                                </div>
                                <div className='w-[30px] h-[30px] text-[22px] leading-7 text-center'>{PersonsToDrive}</div>
                                <div className='border-2 w-[30px] h-[30px] rounded-[50%]' onClick={handleIncreaseNumber}>
                                    <AiOutlinePlus className="w-full h-full"/>
                                </div>
                            </div>
                            <button id="person-and-submit-wraper" className="rounded-[10px] h-[50px] w-5/12 border uppercase bg-black text-yellow-400">See offers</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

const PlacesAutocompletFrom = ({setSelected}) => {
    const {
        ready,
        value,
        setValue,
        suggestions:{status, data},
        clearSuggestions,
    } = usePlacesAutocomplete()

    const handleSelect = async (address) => {
        clearSuggestions();
        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0])
        setSelected({lat,lng});
        setValue(address, false);

    };
    
    return (
            <Combobox onSelect={handleSelect}>
                <ComboboxInput 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                    placeholder='Search address' 
                    className="combobo-input" 
                    disabled={!ready}/>
                <ComboboxPopover>
                    <ComboboxList>
                        {status === 'OK' && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description} />)}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
    )}
