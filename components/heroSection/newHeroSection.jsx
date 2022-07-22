import { ButtonExperimente } from "./buttonExperiment";
import Image from "next/image";
import { useWindowSize } from "../../hooks/hook";
export const NewHeroSection = () => {
  const size = useWindowSize();
  return (
    <section
      className="w-full h-full 
    p-5 md:pb-36 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row w-full h-full items-center md:justify-around text-white mt-[7.5rem] md:mt-[8rem]">
        <div className="flex flex-col items-center w-[18rem] md:w-7/12 mb-auto">
          <span className=" text-center md:text-start text-3xl md:text-5xl font-semibold md:ml-auto">
            Decole seu time e suas Vendas através do WhatsApp!
          </span>
          <p className="text-center md:text-start md:text-3xl md:font-medium md:w-11/12 mr-auto mt-4 mb-4">
            Vários WhatsApps, Bots e muito mais em um só lugar! Revolucione sua
            empresa com quem atende e entende suas necessidades!
          </p>
          {/* <div className="flex w-full md:justify-center md:mr-16">
            <Image
              src={require("../../public/img/quality.svg")}
              width={60}
              height={50}
              alt="quality"
            />
           
          </div> */}
          <ButtonExperimente />
        </div>
        <div className='w-[320px] md:w-[550px] hover:scale-105 ease-in-out duration-300 shadow-lg shadow-[#ffffff2a]'>
          <video loop autoPlay >
            <source src="http://10.1.2.218/viachat.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div className="bg-blue-50 rounded-t-full shadow-sm rounded-br-full p-5">
          <Image
            src={require("../../public/img/all.svg")}
            width={size <= 760 ? 240 : 480}
            height={size <= 760 ? 180 : 360}
            alt="all"
          />
        </div> */}
      </div>
      {/* <div className="relative w-[30rem] md:w-screen h-[30rem] rounded-t-full
     right-[4.4rem] md:right-auto 2xl:right-40  top-5 md:top-[7rem] "></div> */}
    </section>
  );
};
