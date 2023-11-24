import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsFillPersonFill, BsFillBagFill } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useReducer } from "react";
import Cars from "../data/cars.json";
import { AppContext } from "@/pages/_app";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment-sedan":
      // if(state.sedan >= 0)
      return;
    // return { sedan: state.sedan + 1, van: state.van };

    case "decrement-sedan":
      if (state.sedan > 0) {
        3;
        return { sedan: state.sedan - 1, van: state.van };
      } else return state;
    case "increment-van":
      // if(state.van >= 0)
      return { van: state.van + 1, sedan: state.sedan };

    case "decrement-van":
      if (state.van > 0) {
        return { van: state.van - 1, sedan: state.sedan };
      }

    case "resetCars":
      if (action.pass.router > 4) {
        return { van: (state.van = 1), sedan: (state.sedan = 0) };
      } else {
        return { van: (state.van = 0), sedan: (state.sedan = 1) };
      }

    //   return state;
  }
}

let CarsData = { sedan: 0, van: 1 };

export default function Carcomponent() {
  const router = useRouter();
  const { cars, setCars } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, CarsData);
  function increment(e: any) {
    console.log(state);
    if (e.target.id === "sedan") {
      setCars({ sedan: cars.sedan + 1, van: cars.van });
      dispatch({ type: "increment-sedan" });
    }
    if (e.target.id === "van") {
      setCars({ sedan: cars.sedan, van: cars.van + 1 });
      dispatch({ type: "increment-van" });
    }
  }

  function decrement(e: any) {
    console.log(e.target.id);
    if (e.target.id === "van") {
      setCars({ sedan: cars.sedan, van: cars.van - 1 });
      dispatch({ type: "decrement-van" });
    } else {
      dispatch({ type: "decrement-sedan" });
      setCars({ sedan: cars.sedan - 1, van: cars.van });
    }
  }

  function resetCars() {
    dispatch({
      type: "resetCars",
      pass: { router: router.query.passengers },
    });
  }

  let CarComponent = Cars.cars.map((i) => {
    let numberOfCars = 1;
    for (var car in state) {
      if (state.hasOwnProperty(car)) {
        if (i.meta === "sedan") {
          numberOfCars = state[i.meta];
          // console.log(state[car]);
        }
        if (i.meta === "van") numberOfCars = state[i.meta];
      }
    }

    return (
      <div
        key={i.type}
        className="rounded-[10px] h-auto lg:h-auto w-1/2 lg:w-[500px] bg-white flex pt-[4px] border-red-900"
      >
        <div id="left-wrapper" className="w-10/12 lg:w-full">
          <div className="w-full">
            <p className=" text-center font-bold">{i.type}</p>
          </div>
          <div
            id="context-wrapper"
            className="flex w-full flex-col lg:flex-row-reverse"
          >
            <div className="relative w-full h-[90px] lg:h-[200px]">
              <Image
                className="object-contain"
                src={i.photo}
                fill
                alt="sedan"
              ></Image>
            </div>
            <div className="w-[300px] text-[10px] lg:text-[16px]">
              <div className="w-full flex pl-[5px]">
                <BsFillPersonFill className="text-yellow-500" />
                <p className="text-center font-semibold pl-[5px]">
                  max {i.passengers} people
                </p>
              </div>
              <div className="w-full flex pl-[5px]">
                <BsFillBagFill className="text-yellow-500" />
                <p className=" text-center font-semibold pl-[5px]">
                  do {i.fits} walizek
                </p>
              </div>
              <div className="w-full flex pl-[5px] mt-[1px]">
                {/* <div className="text-yellow-500 w-[20px]"></div> */}
                {/* <AiFillDollarCircle className="text-yellow-500"/> */}
                <p className=" text-center font-normal pl-[1px]">
                  od {i.price} zł
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="left-wrapper" className="w-[50px]">
          <div className="relative w-full h-[25px] lg:h-full lg:flex items-center justify-around ">
            <div>
              <IoIosArrowUp
                id={i.meta}
                className="w-[30px] lg:w-[50px] text-[40px] cursor-pointer"
                onClick={increment}
              />
              <div className="w-[30px] lg:w-[50px] h-[20px] lg:h-[50px] text-[20px] lg:text-[30px] text-center leading-5 flex items-center justify-center">
                {numberOfCars}
              </div>
              <IoIosArrowDown
                id={i.meta}
                className="w-[30px] lg:w-[50px]  text-[40px] cursor-pointer"
                onClick={decrement}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return CarComponent;
}
