import Image from "next/image";
import { useState } from "react";
export const FloatingButton = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className="fixed md:top-[40rem] bg-white w-16 h-16 rounded-full md:left-[80rem] 
    z-10 flex justify-center items-center "
    >
      <button
        className="mt-1"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <Image
          src={require("../../../public/img/logo.png")}
          alt={"logo"}
          width={50}
          height={50}
        />
      </button>
      {visible ? (
        <></>
      ) : (
        <>
          <div
            className="absolute bottom-20 rounded-2xl bg-gray-100 font-kroneOne
          w-56 h-16 -left-36 flex justify-around items-center "
          >
            <Image
              src={require("../../../public/img/wpp-mob.svg")}
              alt={"wpp"}
              width={30}
              height={30}
            />
            <span className="text-xs cursor-pointer mr-5" onClick={() => window.open("https://api.whatsapp.com/send/?phone=559988021160&text&type=phone_number&app_absent=0", "_blank")}>
              Fale com o <span className="font-bold">suporte</span>{" "}
            </span>
          </div>
        </>
       
      )}
    </div>
  );
};
