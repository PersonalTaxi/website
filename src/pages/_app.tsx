import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useReducer, useState } from "react";
import Search from "./MainPage/Search/search";

type QueryParams = {
  serviceType: any;
  setServiceType: React.Dispatch<React.SetStateAction<any>>;
  queryFrom: string;
  setQueryFrom: React.Dispatch<React.SetStateAction<string>>;
  queryTo: string;
  setQueryTo: React.Dispatch<React.SetStateAction<string>>;
  date: any;
  setDate: React.Dispatch<React.SetStateAction<any>>;
  dateLimit: any;
  setDateLimit: React.Dispatch<React.SetStateAction<any>>;
  time: any;
  setTime: React.Dispatch<React.SetStateAction<any>>;
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
  latLangFrom: any;
  setlatLangFrom: React.Dispatch<React.SetStateAction<any>>;
  latLangTo: any;
  cars: any;
  setCars: React.Dispatch<React.SetStateAction<any>>;
  setlatLangTo: React.Dispatch<React.SetStateAction<any>>;
  calculateDistance: any;
  setCalculateDistance: React.Dispatch<React.SetStateAction<any>>;
  isFormCompleted: any;
  setIsFromCompleted: React.Dispatch<React.SetStateAction<any>>;
  flightNumber: any;
  setFlightNumber: React.Dispatch<React.SetStateAction<any>>;
  infoForDriver: any;
  setInfoForDriver: React.Dispatch<React.SetStateAction<any>>;
  unusualItems: any;
  setUnusualItems: React.Dispatch<React.SetStateAction<any>>;
  SearchButtonWasClicked: any;
  setSearchButtonWasClicked: React.Dispatch<React.SetStateAction<any>>;
  mapLongitude: any;
  setMapLongitude: React.Dispatch<React.SetStateAction<any>>;
  mapLatitude: any;
  setMapLatitude: React.Dispatch<React.SetStateAction<any>>;
  mapUpdated: any;
  setMapUpdated: React.Dispatch<React.SetStateAction<any>>;
  whatIsOrdering: any;
  setWhatIsOrdering: React.Dispatch<React.SetStateAction<any>>;

  sessionIdContext: any;
  setSessionIdContext: React.Dispatch<React.SetStateAction<any>>;
  currencyTXT: any;
  setCurrencyTXT: React.Dispatch<React.SetStateAction<any>>;

  // Person details
  personTitle: any;
  setPersonTitle: React.Dispatch<React.SetStateAction<any>>;
  firstName: any;
  setFirstName: React.Dispatch<React.SetStateAction<any>>;
  lastName: any;
  setLastName: React.Dispatch<React.SetStateAction<any>>;
  email: any;
  setEmail: React.Dispatch<React.SetStateAction<any>>;
  phonePrefix: any;
  setPhonePrefix: React.Dispatch<React.SetStateAction<any>>;
  phone: any;
  setPhone: React.Dispatch<React.SetStateAction<any>>;

  //final price
  price: any;
  setPrice: React.Dispatch<React.SetStateAction<any>>;

  municipalityFrom: any;
  setMunicipalityFrom: React.Dispatch<React.SetStateAction<any>>;
  municipalityTo: any;
  setMunicipalityTo: React.Dispatch<React.SetStateAction<any>>;

  //travels
  travelDestination: any;
  setTravelDestination: React.Dispatch<React.SetStateAction<any>>;
  travelLocalizationFrom: any;
  setTravelLocalizationFrom: React.Dispatch<React.SetStateAction<any>>;
  travelLocalizationFromLatLang: any;
  setTravelLocalizationFromLatLang: React.Dispatch<React.SetStateAction<any>>;
  travelDate: any;
  setTravelDate: React.Dispatch<React.SetStateAction<any>>;

  travelTime: any;
  setTravelTime: React.Dispatch<React.SetStateAction<any>>;
  persons: any;
  setPersons: React.Dispatch<React.SetStateAction<any>>;
  travelCar: any;
  setTravelCar: React.Dispatch<React.SetStateAction<any>>;
  travelMassage: any;
  setTravelMassage: React.Dispatch<React.SetStateAction<any>>;
  travelPersonTitle: any;
  setTravelPersonTitle: React.Dispatch<React.SetStateAction<any>>;
  travelFirstName: any;
  setTravelFirstName: React.Dispatch<React.SetStateAction<any>>;
  travelLastName: any;
  setTravelLastName: React.Dispatch<React.SetStateAction<any>>;
  travelEmail: any;
  setTravelEmail: React.Dispatch<React.SetStateAction<any>>;
  travelPrefixPhone: any;
  setTravelPrefixPhone: React.Dispatch<React.SetStateAction<any>>;
  travelPhone: any;
  setTravelPhone: React.Dispatch<React.SetStateAction<any>>;
  travelPrice: any;
  setTravelPrice: React.Dispatch<React.SetStateAction<any>>;
  finalTravelPrice: any;
  setFinalTravelPrice: React.Dispatch<React.SetStateAction<any>>;
  howEarly: any;
  setHowEarly: React.Dispatch<React.SetStateAction<any>>;
};

export const AppContext = createContext({} as QueryParams);

export default function App({ Component, pageProps }: AppProps) {
  const [queryFrom, setQueryFrom] = useState("");
  const [queryTo, setQueryTo] = useState("");
  const [dateLimit, setDateLimit] = useState(() => {
    const ActualData = new Date();
    const NewDate = ActualData.setTime(ActualData.getTime() + 16 * 60 * 60 * 1000);

    const ReservationDate = new Date(NewDate);
    let ActualDate = ReservationDate.toISOString().slice(0, 16);
    return ActualDate;
  });
  const [date, setDate] = useState(() => {
    const ActualData = new Date();
    const NewDate = ActualData.setTime(ActualData.getTime() + 16 * 60 * 60 * 1000);

    const ReservationDate = new Date(NewDate);
    // console.log(ReservationDate.toISOString());
    let StartDate = ReservationDate.toISOString().slice(0, 16);

    return StartDate;
  });
  //type of service
  const [serviceType, setServiceType] = useState();
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(2);
  const [latLangFrom, setlatLangFrom] = useState(null);
  const [latLangTo, setlatLangTo] = useState(null);
  const [cars, setCars] = useState({ sedan: 0, van: 0 });
  const [calculateDistance, setCalculateDistance] = useState(null);
  const [flightNumber, setFlightNumber] = useState(null);
  const [infoForDriver, setInfoForDriver] = useState();
  const [unusualItems, setUnusualItems] = useState();
  const [SearchButtonWasClicked, setSearchButtonWasClicked] = useState(false);
  const [mapLongitude, setMapLongitude]: any = useState(19.945);
  const [mapLatitude, setMapLatitude]: any = useState(40.064);
  const [mapUpdated, setMapUpdated] = useState(false);
  const [sessionIdContext, setSessionIdContext] = useState();
  const [whatIsOrdering, setWhatIsOrdering] = useState(null);
  const [currencyTXT, setCurrencyTXT] = useState("EUR");

  //travels
  const [travelLocalizationFrom, setTravelLocalizationFrom] = useState("empty");
  const [travelDestination, setTravelDestination] = useState();
  const [travelLocalizationFromLatLang, setTravelLocalizationFromLatLang] = useState();
  const [travelDate, setTravelDate] = useState();
  const [travelTime, setTravelTime] = useState("15:30");
  const [travelCar, setTravelCar] = useState("Sedan");
  const [persons, setPersons] = useState(2);
  const [travelMassage, setTravelMassage] = useState();
  const [travelPersonTitle, setTravelPersonTitle] = useState();
  const [travelFirstName, setTravelFirstName] = useState();
  const [travelLastName, setTravelLastName] = useState();
  const [travelEmail, setTravelEmail] = useState();
  const [travelPrefixPhone, setTravelPrefixPhone] = useState("+48");
  const [travelPhone, setTravelPhone] = useState();
  const [travelPrice, setTravelPrice] = useState(600);
  const [finalTravelPrice, setFinalTravelPrice] = useState();
  const [howEarly, setHowEarly] = useState();

  //validation
  const [isFormCompleted, setIsFromCompleted] = useState(false);

  //data from clients
  const [personTitle, setPersonTitle] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phonePrefix, setPhonePrefix] = useState("+48");
  const [phone, setPhone] = useState();

  const [municipalityFrom, setMunicipalityFrom] = useState("Kraków");
  const [municipalityTo, setMunicipalityTo] = useState("Kraków");

  //price
  const [price, setPrice] = useState();
  return (
    <AppContext.Provider
      value={{
        serviceType,
        setServiceType,
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
        cars,
        setCars,
        calculateDistance,
        setCalculateDistance,
        isFormCompleted,
        setIsFromCompleted,
        SearchButtonWasClicked,
        setSearchButtonWasClicked,
        mapLongitude,
        setMapLongitude,
        mapLatitude,
        setMapLatitude,
        mapUpdated,
        setMapUpdated,
        flightNumber,
        setFlightNumber,
        infoForDriver,
        setInfoForDriver,
        unusualItems,
        setUnusualItems,
        whatIsOrdering,
        setWhatIsOrdering,
        price,
        setPrice,

        //client's data
        personTitle,
        setPersonTitle,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phone,
        setPhone,
        phonePrefix,
        setPhonePrefix,
        email,
        setEmail,
        //price
        currencyTXT,
        setCurrencyTXT,
        municipalityFrom,
        setMunicipalityFrom,
        municipalityTo,
        setMunicipalityTo,
        dateLimit,
        setDateLimit,
        sessionIdContext,
        setSessionIdContext,
        travelDestination,
        setTravelDestination,
        //travel
        travelLocalizationFrom,
        setTravelLocalizationFrom,
        travelLocalizationFromLatLang,
        setTravelLocalizationFromLatLang,
        travelDate,
        setTravelDate,
        travelTime,
        setTravelTime,
        persons,
        travelCar,
        setTravelCar,
        setPersons,
        travelMassage,
        setTravelMassage,
        travelPersonTitle,
        setTravelPersonTitle,
        travelFirstName,
        setTravelFirstName,
        travelLastName,
        setTravelLastName,
        travelEmail,
        setTravelEmail,
        travelPrefixPhone,
        setTravelPrefixPhone,
        travelPhone,
        setTravelPhone,
        travelPrice,
        setTravelPrice,
        finalTravelPrice,
        setFinalTravelPrice,
        howEarly,
        setHowEarly,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
