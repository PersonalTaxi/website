import React from "react";
import { useState } from "react";
import Faq from "../../data/faq.json";
import { IoIosArrowDown } from "react-icons/io";

export default function Faqelement() {
  const [FaqWork, setFaqWork] = useState(Faq);

  const handleShowOrHideElement = (e: any, key: any) => {
    console.log(key);
    const data = FaqWork.map((i) => {
      if (i.id === key + 1) {
        return {
          ...i,
          isShowed: !i.isShowed,
        };
      } else return i;
    });
    setFaqWork(data);
  };

  const data = FaqWork.map((i, key) => {
    return (
      <div
        key={key}
        className={
          i.isShowed === false
            ? "w-[92%] h-[70px] mx-auto bg-white border-b overflow-hidden duration-200"
            : "w-[92%] h-[180px] mx-auto bg-white border-b overflow-hidden duration-200"
        }
        onClick={(e: any) => handleShowOrHideElement(e, key)}
      >
        <div className="flex items-center justify-between h-[70px] w-full">
          <p className="w-[95%] font-semibold">{i.question}</p>
          <IoIosArrowDown
            className={
              i.isShowed === false
                ? "rotate-0 duration-200"
                : "rotate-180 duration-200"
            }
          />
        </div>
        <div className="h-[50px]">{i.answer}</div>
      </div>
    );
  });

  return (
    <div className="w-[87%] -mt-[40px]  bg-white rounded-t-[10px] pt-[10px] overflow-hidden mx-auto">
      {data}
    </div>
  );
}
