import { Ubuntu } from "next/font/google";
import { Montserrat } from "next/font/google";
import Header from "./Header/header";
import Head from "next/head";
import Main from "./MainPage/main";
import LocalizationLoader from "@/components/localizationLoader";
import { AppContext } from "./_app";
import { useContext } from "react";

const rubikFonts = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  const {
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
  } = useContext(AppContext);

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Your best drive</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
      </Head>
      <div className={`${MontserratFont.className}`}>
        {lookingForLocalization === true && (
          <LocalizationLoader
            latLangFrom={latLangFrom}
            setlatLangFrom={setlatLangFrom}
            latLangTo={latLangTo}
            setlatLangTo={setlatLangTo}
            queryFrom={queryFrom}
            setQueryFrom={setQueryFrom}
            queryTo={queryTo}
            setQueryTo={setQueryTo}
            lookingForLocalization={lookingForLocalization}
            setLookingForLocalization={setLookingForLocalization}
            foundedLocalization={foundedLocalization}
            setFoundedLocalization={setFoundedLocalization}
            foundedLocalizationLatLang={foundedLocalizationLatLang}
            setFoundedLocalizationLatLang={setFoundedLocalizationLatLang}
          />
        )}
        <main>
          <Header />
          <Main />
        </main>
      </div>
    </>
  );
}
