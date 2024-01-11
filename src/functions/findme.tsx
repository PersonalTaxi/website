import react, { useContext } from "react";
// import { AppContext } from "@/pages/_app";

export async function Findme(newLatLangMarker: any) {
  let Localization = await fetch(
    `https://api.tomtom.com/search/2/search/${newLatLangMarker.lat},${newLatLangMarker.lng}.json?key=cjmuWSfVTrJfOGj7AcXvMLU8R8i1Q9cF&countrySet=PL,DE&limit=10&language=en-US`,
  );
  const data = await Localization.json();
  let finalAdress = "";

  //map results
  let Adress: any = "";
  await data?.results.map((i: any) => {
    console.log(i);
    if (i.type === "Point Address" && Adress === "") {
      Adress = {
        adress: i.address.freeformAddress,
        lonlat: i.position,
        commune: i.address.municipality,
      };
    }
  });

  console.log(Adress);
  return Adress;

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    alert(
      "You did not give permission to use your localization. Please change your browser settings, or choose localization from search filed",
    );
  }

  //   navigator.geolocation.getCurrentPosition(await success, await error, options);
}
