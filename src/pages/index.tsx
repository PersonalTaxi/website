import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Header from "./Header/header";
import Head from "next/head";
import Main from "./MainPage/main";

const rubikFonts = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function Home() {
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
      <div className={`${rubikFonts.className}`}>
        <main>
          <Header />
          <Main />
        </main>
      </div>
    </>
  );
}
