import React, { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

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

export default function localizationLoader({
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
  const [mapLongitude, setMapLongitude] = useState(-121.91599);
  const [mapLatitude, setMapLatitude] = useState(37.36765);
  const [mapZoom, setMapZoom] = useState(15);
  const [map, setMap] = useState({});

  const mapElement: any = useRef();

  const handleClosingLocalizationWindow = () => {
    setLookingForLocalization(false);
  };

  const addLocalizationAsStartingPoint = () => {
    setQueryFrom(foundedLocalization);
    setlatLangFrom(foundedLocalizationLatLang);
    setTimeout(() => {
      setLookingForLocalization(false);
    }, 500);
  };

  const addLocalizationAsEndingPoint = () => {
    setQueryTo(foundedLocalization);
    setlatLangTo(foundedLocalizationLatLang);
    setTimeout(() => {
      setLookingForLocalization(false);
    }, 500);
  };

  useEffect(() => {
    console.log("render");
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

        setMap(map);
        const marker = await new tt.Marker({
          draggable: true,
        })
          .setLngLat(foundedLocalizationLatLang)
          .addTo(map);

        return () => map.remove();
      }
    };
    handleMap();
  }, [foundedLocalizationLatLang]);

  return (
    <div
      // ref={windowWithLocalization}
      className="fixed w-screen h-screen bg-gray-900/[0.8] z-[500]"
    >
      <div
        className={
          foundedLocalization !== ""
            ? "lg:w-[800px] w-[95vw] duration-100 h-[500px] border bg-white mx-auto flex items-center justify-center mt-[10vh] rounded-[10px] p-[10px] flex-col overflow-hidden"
            : "lg:w-[400px] h-[100px] duration-200 border bg-white mx-auto flex items-center justify-center mt-[40vh] rounded-[10px] p-[10px] flex-col"
        }
      >
        {foundedLocalization === "" && (
          <button
            disabled
            type="button"
            className="text-black text-[35px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
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
            We are looking for you...
          </button>
        )}
        {foundedLocalization !== "" && (
          <div>
            <div className="flex flex-col lg:flex-row">
              <p className="font-bold lg:mb-[15px]">We've find you here: &nbsp;</p>{" "}
              {foundedLocalization}
            </div>
          </div>
        )}

        <div
          ref={mapElement}
          className={
            foundedLocalization === ""
              ? "hidden h-[300px] lg:w-[700px] w-[90%] mx-auto"
              : "block h-[300px] lg:w-[700px] w-[90%] mx-auto"
          }
        ></div>
        {foundedLocalization !== "" && (
          <div className="lg:w-[700px] w-[99%] mx-auto leading-4 lg:leading-auto my-[15px]">
            Please, check founded localization carefully! If it is ok you add it as param using
            button below. If not, please refresh site and try again or add your localization
            manually.
            <div className="flex flex-start">
              <div
                onClick={addLocalizationAsStartingPoint}
                className="border px-[10px] py-[2px] m-[5px] cursor-pointer rounded-[5px] bg-gray-400 text-white leading-4 lg:leading-auto"
              >
                Add as a start point
              </div>
              <div
                onClick={addLocalizationAsEndingPoint}
                className="border px-[10px] py-[2px] m-[5px] cursor-pointer rounded-[5px] bg-gray-400 text-white leading-4 lg:leading-auto"
              >
                Add as an end point
              </div>
              <div
                onClick={handleClosingLocalizationWindow}
                className="border px-[10px] py-[2px] m-[5px] cursor-pointer rounded-[5px] bg-gray-400 text-white leading-4 lg:leading-auto"
              >
                Close and add manualy
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}