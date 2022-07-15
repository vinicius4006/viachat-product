import Image from "next/image";
import { useState } from "react";
import { useWindowSize } from "../heroSection/hook";
export const SubInfo = ({ srcImg, altImg, title, description }) => {
  const size = useWindowSize();
  return (
    // className="estiloTipoGrid"

    <div
      className={`bg-white flex justify-center w-10/12 h-[12rem] ml-auto mr-auto 
      md:w-[20.16rem] md:h-[13.44rem] rounded-lg duration-500`}
      // onMouseOver={() => setShowMore(true)}
      // onMouseOut={() => setShowMore(true)}
    >
      {/* className="pText" */}
      <div className={`relative top-6 left-2 md:left-auto`}>
        <p className="text-xl md:text-3xl font-semibold">{title}</p>
        {/* className="spanText" */}
        <div className="w-[15rem] text-base mt-2">
          <span>{description}</span>
        </div>
      </div>
      <div className="md:absolute relative scale-150 translate-y-5 translate-x-4 md:translate-y-0 md:translate-x-48 duration-500 ease-in-out">
        <Image
          src={srcImg}
          alt={altImg}
          width={size.width <= 760 ? 170 : 110}
          height={size.width <= 760 ? 300 : 210}
          className='absolute'
        />
      </div>
    </div>
  );
};
