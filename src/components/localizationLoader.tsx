import React, { useState, useRef, useEffect, createElement, useContext } from "react";
import { useRouter } from "next/router";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import Languages from "../data/languages.json";
import { Findme } from "../functions/findme";
import { AppContext } from "@/pages/_app";
import { AiFillInfoCircle } from "react-icons/ai";

type QueryParams = {
  latLangFrom: any;
  setlatLangFrom: React.Dispatch<React.SetStateAction<any>>;
  latLangTo: any;
  setlatLangTo: React.Dispatch<React.SetStateAction<any>>;
  queryFrom: any;
  setQueryFrom: React.Dispatch<React.SetStateAction<any>>;
  queryTo: any;
  setQueryTo: React.Dispatch<React.SetStateAction<any>>;
  lookingForLocalization: any;
  setLookingForLocalization: React.Dispatch<React.SetStateAction<any>>;
  foundedLocalization: any;
  setFoundedLocalization: React.Dispatch<React.SetStateAction<any>>;
  foundedLocalizationLatLang: any;
  setFoundedLocalizationLatLang: React.Dispatch<React.SetStateAction<any>>;
};

export default function LocalizationLoader({
  latLangFrom,
  setlatLangFrom,
  latLangTo,
  setlatLangTo,
  queryFrom,
  setQueryFrom,
  queryTo,
  setQueryTo,
  lookingForLocalization,
  setLookingForLocalization,
  foundedLocalization,
  setFoundedLocalization,
  foundedLocalizationLatLang,
  setFoundedLocalizationLatLang,
}: QueryParams) {
  const router = useRouter();

  //TomTom Map params
  const [isInCommune, setIsInCommune] = useState(true);
  const [mapZoom, setMapZoom] = useState(15);
  const [map, setMap] = useState({});

  const infoAboutWrongLocalization: any = useRef();

  const {
    travelLocalizationFrom,
    setTravelLocalizationFrom,
    travelLocalizationFromLatLang,
    setTravelLocalizationFromLatLang,
    travelMunicipality,
    setTravelMunicipality,
  } = useContext(AppContext);

  const mapElement: any = useRef();

  const setDescLanguage = () => {
    if (router.asPath.includes("/pl")) {
      return Languages.PL[0];
    } else {
      return Languages.EN[0];
    }
  };

  const [descriptions, setDescriptions] = useState(setDescLanguage());

  const handleClosingLocalizationWindow = () => {
    setLookingForLocalization(false);
    setFoundedLocalization("");
  };

  const addLocalizationAsStartingPoint = () => {
    console.log(foundedLocalizationLatLang);
    if (router.asPath.includes("travel")) {
      setTravelLocalizationFrom(foundedLocalization);
      setTravelLocalizationFromLatLang([
        foundedLocalizationLatLang[1],
        foundedLocalizationLatLang[0],
      ]);
      setTimeout(() => {
        setLookingForLocalization(false);
        setFoundedLocalization("");
      }, 500);
    } else {
      setQueryFrom(foundedLocalization);
      setlatLangFrom([foundedLocalizationLatLang[1], foundedLocalizationLatLang[0]]);
      setTimeout(() => {
        setLookingForLocalization(false);
        setFoundedLocalization("");
      }, 500);
    }
  };

  const addLocalizationAsEndingPoint = () => {
    setQueryTo(foundedLocalization);
    setlatLangTo([foundedLocalizationLatLang[1], foundedLocalizationLatLang[0]]);
    setTimeout(() => {
      setLookingForLocalization(false);
      setFoundedLocalization("");
    }, 500);
  };

  useEffect(() => {
    console.log("render");

    const checkIfCommuneIsCorrect = (newGeolocalization: any) => {
      if (router.asPath.includes("travel")) {
        if (
          newGeolocalization.commune !== "Krakow" &&
          newGeolocalization.commune !== "Kraków" &&
          newGeolocalization.commune !== "Zabierzów"
        ) {
          setIsInCommune(false);
        } else {
          setIsInCommune(true);
        }
      }
    };

    const handleMap = async () => {
      if (foundedLocalization !== "") {
        const element = document.createElement("div");
        element.id = "marker";
        const tt = await import("@tomtom-international/web-sdk-maps");
        let map = await tt.map({
          key: "rKQOvSWb5WRcI826HMCl5W82PMDxhDqM",
          container: mapElement.current,
          center: foundedLocalizationLatLang,
          zoom: mapZoom,
        });

        checkIfCommuneIsCorrect(travelMunicipality);

        setMap(map);
        const marketIcon = document.createElement("div");
        marketIcon.className = "w-[50px] h-[74px] bg-[url('/localization_map.png')] bg-contain";
        const marker = await new tt.Marker({ element: marketIcon, draggable: true })
          .setLngLat(foundedLocalizationLatLang)
          .addTo(map);

        const actualizeLocalizatiom = async () => {
          const newLatLangMarker = await marker.getLngLat();
          console.log(newLatLangMarker);
          if (newLatLangMarker !== foundedLocalizationLatLang) {
            const newGeolocalization = await Findme(newLatLangMarker);

            setFoundedLocalization(newGeolocalization.adress);
            setFoundedLocalizationLatLang([
              newGeolocalization.lonlat.lon,
              newGeolocalization.lonlat.lat,
            ]);

            checkIfCommuneIsCorrect(newGeolocalization);
          }
        };

        mapElement.current.addEventListener("mouseup", actualizeLocalizatiom);
        mapElement.current.addEventListener("touchend", actualizeLocalizatiom);

        return () => map.remove();
      }
    };
    handleMap();
  }, [foundedLocalization !== ""]);

  return (
    <div
      // ref={windowWithLocalization}
      className="fixed w-screen h-screen bg-gray-900/[0.8] z-[500]"
    >
      <div
        className={
          foundedLocalization !== ""
            ? "lg:w-[800px] w-[95vw] duration-100 h-[500px] border bg-white mx-auto flex items-center justify-center mt-[10vh] rounded-[10px] p-[10px] flex-col overflow-hidden"
            : "lg:w-[400px] w-[95vw] h-[100px] duration-200 border bg-white mx-auto flex items-center justify-center mt-[40vh] rounded-[10px] p-[10px] flex-col"
        }
      >
        {foundedLocalization === "" && (
          <button
            disabled
            type="button"
            className="text-black text-[35px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-[40px] h-[40px] me-12 text-blue-600 animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            {descriptions.FINDME_POPUP_loader}
          </button>
        )}
        {foundedLocalization !== "" && (
          <div className="lg:mb-[15px]">
            <div className="flex flex-col lg:flex-row justify-start w-[80vw] lg:w-[700px] mx-auto">
              <p className="font-bold">{descriptions.FINDME_POPUP_founded_localization}&nbsp;</p>
              {foundedLocalization}
            </div>
            {isInCommune === false && (
              <div
                ref={infoAboutWrongLocalization}
                className="flex items-center italic text-[14px] underline"
              >
                <AiFillInfoCircle className="text-red-600 mr-[10px]" />
                <p>
                  Adres musi istnieć w gminie Kraków lub Zabierzów, nie możesz wybrać tego adresu.
                </p>
              </div>
            )}
          </div>
        )}

        <div
          ref={mapElement}
          className={
            foundedLocalization === ""
              ? "hidden lg:h-[500px] lg:w-[700px] w-[90%] h-[500px] mx-auto"
              : "block lg:h-[500px] lg:w-[700px] w-[90%] h-[500px] mx-auto"
          }
        ></div>
        {foundedLocalization !== "" && (
          <div className="lg:w-[700px] w-full mx-auto leading-4 lg:leading-auto my-[15px]">
            <p className="w-[90%] lg:w-full mx-auto">{descriptions.FINDME_POPUP_info}</p>
            <div className="flex flex-start">
              {isInCommune === true && (
                <div
                  onClick={addLocalizationAsStartingPoint}
                  className="border px-[10px] py-[2px] m-[5px] cursor-pointer rounded-[5px] bg-gray-400 text-white leading-4 lg:leading-auto"
                >
                  {!router.asPath.includes("travel")
                    ? descriptions.FINDME_POPUP_add_as_start
                    : "Add as starting point"}
                </div>
              )}
              {!router.asPath.includes("travel") && (
                <div
                  onClick={addLocalizationAsEndingPoint}
                  className="border px-[10px] py-[2px] m-[5px] cursor-pointer rounded-[5px] bg-gray-400 text-white leading-4 lg:leading-auto"
                >
                  {descriptions.FINDME_POPUP_add_as_end}
                </div>
              )}
              <div
                onClick={handleClosingLocalizationWindow}
                className="border px-[10px] py-[2px] m-[5px] cursor-pointer rounded-[5px] bg-gray-400 text-white leading-4 lg:leading-auto"
              >
                {descriptions.FINDME_POPUP_add_manually}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
