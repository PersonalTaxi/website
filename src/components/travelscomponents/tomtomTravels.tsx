import React, { useRef, useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import useDebounce from "@/hooks/useDebounce";

//icons
import {
  MdLocalAirport,
  MdPlace,
  MdHotel,
  MdDirectionsCar,
  MdAttachMoney,
  MdLocalParking,
} from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { IoMdRestaurant } from "react-icons/io";
import { BiSolidMap } from "react-icons/bi";
import { AiFillCloseSquare, AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { AppContext } from "../../pages/_app";

interface Props {
  localizationIsUnknow: any;
  setLocalizationIsUnknow: React.Dispatch<React.SetStateAction<any>>;
  travelLocalizationFrom: any;
  setTravelLocalizationFrom: React.Dispatch<React.SetStateAction<any>>;
}

export default function TomTom({
  localizationIsUnknow,
  setLocalizationIsUnknow,
  travelLocalizationFrom,
  setTravelLocalizationFrom,
}: Props) {
  const router = useRouter();

  const {
    queryFrom,
    setQueryFrom,
    queryTo,
    setQueryTo,
    date,
    setDate,
    time,
    setTime,
    people,
    setPeople,
    latLangFrom,
    setlatLangFrom,
    latLangTo,
    setlatLangTo,
    calculateDistance,
    setCalculateDistance,
    isFormCompleted,
    setIsFromCompleted,
    mapLongitude,
    setMapLongitude,
    mapLatitude,
    setMapLatitude,
    mapUpdated,
    setMapUpdated,
    municipalityFrom,
    setMunicipalityFrom,
    municipalityTo,
    setMunicipalityTo,
    travelLocalizationFromLatLang,
    setTravelLocalizationFromLatLang,
  } = useContext(AppContext);

  const [focused, setFocused] = useState(false);
  const [queryingTravel, setQueryingTravel] = useState("");
  const [travelListQuery, setTravelListQuery] = useState();

  const debouncedSearch = useDebounce(queryingTravel, 150);

  const [permissionedMunicipality, setPermissionedMunicipality] = useState([
    "Krakow",
    "Kraków",
    "Zabierzów",
  ]);
  const [correctRoad, setCorrectRoad] = useState(true);

  const travelList: any = useRef();
  const inputFrom: any = useRef();
  const inputTo: any = useRef();
  const ToList: any = useRef();
  const clearFrom: any = useRef();
  const clearTo: any = useRef();
  const suggest: any = useRef();
  const CloseInfoAbourRoute: any = useRef();

  const handleChosingParam = (e: any, i: any) => {
    setQueryingTravel(e.target.getAttribute("data-name"));
    setFocused(false);
    setTravelLocalizationFrom(e.target.getAttribute("data-name"));
    setTravelLocalizationFromLatLang([
      e.target.getAttribute("data-value-lat"),
      e.target.getAttribute("data-value-lon"),
    ]);
  };
  console.log(travelLocalizationFromLatLang);

  const handleSearching = (e: any) => {
    setFocused(true);
    setQueryingTravel(e.target.value);
  };

  const handleShowingList = (e: any) => {
    setFocused(true);
    const TargetName = e.target.name;
  };

  const handleHidingList = (e: any) => {
    setFocused(false);
    const RefName = e.target.name;
  };

  // handling X (clear) buttons in localization inputs
  const clearFromQuery = () => {
    setMunicipalityFrom("Kraków");
    setQueryFrom("");
    setlatLangFrom(null);
  };

  //END of handling X (clear) buttons in localization inputs

  useEffect(() => {
    let query: any;
    let RestricionOne: any;
    let RestricionTwo: any;
    query = queryingTravel;

    let SearchLanguage = "pl-PL";

    if (router.asPath.includes("/pl/")) {
      SearchLanguage = "pl-PL";
    } else {
      SearchLanguage = "en-US";
    }

    function fetchData() {
      fetch(
        `https://api.tomtom.com/search/2/search/${query}.json?maxFuzzyLevel=2&key=cjmuWSfVTrJfOGj7AcXvMLU8R8i1Q9cF&setCountry=PL&limit107&language=${SearchLanguage}`,
        {
          method: "GET",
        },
      )
        .then((res) => res.json())
        .then((resData) => {
          return resData.results.filter((i: any) => i.type !== "Geography" && i.type !== "Street");
        })
        .then((resData) => {
          // console.log(resData);
          if (resData) {
            return resData.filter((municipality: any) => {
              if (
                municipality.address?.municipality !== "Zabierzów" &&
                municipality.address?.municipality !== "Krakow"
              ) {
                return false;
              } else {
                return municipality;
              }
            });
          }
        })
        .then((data) => {
          console.log(data);
          // console.log(data);
          const newData = data.map((i: any, key: any) => {
            let icon;
            let POI;
            let Specifics = i.address.freeformAddress;
            let StreetName = i.address.streetName;
            let StreetNumber = i.address.streetNumber;
            let City = "";

            if (i.address.municipalitySubdivision) {
              City = `${i.address.postalCode}, ${i.address.municipalitySubdivision}`;
            } else {
              City = `${i.address.postalCode}, ${i.address.municipality}`;
            }
            let { lat, lon } = i.position;

            //Contions to show icon
            if (i.type === "POI") {
              // StreetNumber = i.address.streetNumber;
              if (i.poi.name === "Kraków John Paul II International Airport") {
                POI = "Kraków Airport";
              } else {
                POI = i.poi.name;
              }
            }
            if (i.type === "Street") {
              POI = `${StreetName},${StreetName}`;
            }
            if (i.type === "Point Address") {
              // StreetNumber = i.address.streetNumber;
              POI = `${City}`;
            }
            // else {
            //   StreetNumber = i.address.streetNumber
            //   POI = i.address.municipality
            // }

            if (!i.poi) {
              icon = <MdPlace className="h-full" />;
            } else {
              if (i.poi.categories[0] === "airport") {
                icon = <MdLocalAirport className="w-full h-full" />;
              }
              if (i.poi.categories[0] === "hotel") {
                icon = <LiaHotelSolid className="w-full h-full" />;
              }
              if (i.poi.categories[0] === "rent-a-car facility") {
                icon = (
                  <>
                    <MdDirectionsCar />
                    <MdAttachMoney />
                  </>
                );
              }
              if (i.poi.categories[0].includes("parking")) {
                icon = <MdLocalParking />;
              }
              if (
                i.poi.categories[0].includes("restaurant") ||
                i.poi.categories[0].includes("fusion") ||
                i.poi.categories[0].includes("italian")
              ) {
                icon = <IoMdRestaurant />;
              } else if (
                i.poi.categories[0] !== "airport" &&
                i.poi.categories[0] !== "hotel" &&
                i.poi.categories[0] !== "rent-a-car facility" &&
                !i.poi.categories[0].includes("parking") &&
                !i.poi.categories[0].includes("restaurant") &&
                !i.poi.categories[0].includes("fusion") &&
                !i.poi.categories[0].includes("italian")
              ) {
                icon = <MdPlace className="h-full" />;
              }
            }
            //END - Contions to show icon

            return (
              <div
                key={key}
                ref={suggest}
                id="travel"
                data-name={POI}
                data-value-lat={lat}
                data-value-lon={lon}
                onMouseDown={(e) => e.preventDefault()}
                className="flex w-full border-b py-[5px] rounded-[10px] px-[10px] duration-200 hover:bg-blue-400 hover:text-white cursor-pointer overflow-hidden"
                onClick={(e: any) => handleChosingParam(e, i)}
              >
                <div
                  ref={suggest}
                  // onClick={(e:any) => handleChosingParam(e,i)}
                  id="travel"
                  data-name={POI}
                  className="w-[30px] h-full p-[5px] flex justify-center items-center"
                >
                  {icon}
                </div>
                <div
                  ref={suggest}
                  // onClick={(e:any) => handleChosingParam(e,i)}
                  id="travel"
                  data-name={POI}
                  className="flex flex-col w-full justify-center"
                >
                  <div
                    ref={suggest}
                    // onClick={(e:any) => handleChosingParam(e,i)}
                    id="travel"
                    data-name={POI}
                    className="font-bold text-[13px] w-full leading-[12px]"
                  >
                    {POI}
                  </div>
                  <div
                    ref={suggest}
                    // onClick={(e:any) => handleChosingParam(e,i)}
                    id="travel"
                    data-name={POI}
                    className="text-[10px] w-full z-20 leading-[12px]"
                  >
                    {Specifics}
                  </div>
                  {/* <p className='text-[10px] bg-blue-800 text-white pl-[10px] w-full'>{i.poi.categories[0]}</p> */}
                </div>
              </div>
            );
          });
          setTravelListQuery(newData);
        });
    }
    if (queryingTravel.length > 2) {
      fetchData();
    }
  }, [debouncedSearch]);

  const handleClosingInfoAboutRoute = () => {
    setCorrectRoad(true);
    setMunicipalityFrom("Kraków");
    setMunicipalityTo("Kraków");
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full h-[47px] flex flex-col rounded-r-[10px]">
        <div
          className={
            correctRoad === true
              ? "absolute w-full h-[0px] mx-auto bg-white z-40 rounded-[10px] flex items-start justify-between overflow-hidden duration-300"
              : "absolute w-full h-[98%] mx-auto bg-white z-40 rounded-[10px] flex items-start justify-between overflow-hidden duration-300"
          }
          onClick={handleClosingInfoAboutRoute}
        >
          <div className="flex items-center w-[90%] h-full">
            <AiFillInfoCircle className="w-[15%]" />
            <div className="h-full w-[85%] leading-4 pt-[20px]">
              Sorry, you can only choose a route which contain a starting or finishig point in
              Kraków commune
            </div>
          </div>
          <AiOutlineClose classname="w-[10%]" />
        </div>
        <div className="flex justify-center items-center border border-gray-900/[0.4] rounded-[10px] relative lg:w-12/12">
          <BiSolidMap className="w-[30px] h-[30px] text-yellow-500/[0.4]" />
          <div
            onClick={clearFromQuery}
            ref={clearFrom}
            className={
              queryFrom.length > 1 && queryFrom !== null
                ? "bg-white cursor-pointer absolute w-[40px] h-[40px] right-0 z-10 flex items-center duration-200 justify-center text-gray-300 mr-[5px] hover:text-gray-800"
                : "hidden"
            }
          >
            <AiFillCloseSquare className="w-[90%] h-[90%]" />
          </div>
          <input
            ref={inputFrom}
            name="From"
            onBlur={handleHidingList}
            value={queryingTravel}
            onFocus={handleShowingList}
            onChange={handleSearching}
            className="text-[15px] w-full min-h-[45px] outline-none rounded-[10px] pl-[5px] pr-[50px] overflow-ellipsis"
            placeholder={
              router.asPath.includes("/pl/") ? "Znajdź lokalizację" : "find the starting location"
            }
            autoComplete="off"
          ></input>
        </div>
        <div
          // onMouseDown={(e) => e.preventDefault()}
          ref={travelList}
          className={
            queryingTravel.length > 2 && focused === true
              ? "absolute w-[400px] top-[225px] border-2 border-yellow-500 rounded-[10px] bg-white z-30"
              : "hidden overflow-hidden"
          }
        >
          {travelListQuery}
        </div>
      </div>
      <div className="h-[1px] lg:hidden bg-gray-400/[0.3] w-11/12 mx-auto"></div>
    </div>
  );
}
