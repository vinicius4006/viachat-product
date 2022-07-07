import Image from "next/image";
import { useEffect } from "react";
import { SubInfo } from "./cardSubInfo";
import { TitleSection } from "./titleSection";


export const InfoGeral = () => {
  useEffect(() => {
    console.log('Build InfoGeral')
  }, [])
  return (
    <div className="w-full bg-[#A5E0D6]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L48,26.7C96,53,192,107,288,112C384,117,480,75,576,101.3C672,128,768,224,864,224C960,224,1056,128,1152,90.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <section
        className="w-full flex flex-col items-center
         h-[40rem] mt-28 md:mt-24 overflow-hidden 
        "
      >
        <TitleSection
          attributes={"text-center"}
          topTitle={"conheça nosso produto"}
          title={"Feito para Você"}
          attTitle={'text-6xl'}
          subTitle={
            "Contruído sob medida para que suas necessidades sejam atendidas"
          }
          attSubTitle={'ml-auto mr-auto mt-3'}
        />
        
      
        <div
          className="grid grid-cols-2 gap-12 mt-10
      md:grid-rows-1 md:gap-x-48 md:mt-28 md:grid-flow-col"
        >
          <SubInfo
            srcImg={require("../../../public/img/statistics.svg")}
            alt={"statistics"}
            title={"Escalabilidade"}
            description={
              "Curabitur tempor, nunc eu aliquet mollis, dolor risus bibendum magna, sed facilisis urna turpis."
            }
          />
          <div className="linhaInfo top-[85rem] right-[57.5rem]" />

          <SubInfo
            srcImg={require("../../../public/img/deal.svg")}
            alt={"deal"}
            title={"Contratos"}
            description={
              "Curabitur tempor, nunc eu aliquet mollis, dolor risus bibendum magna, sed facilisis urna turpis."
            }
          />
          <div className="linhaInfo top-[85rem] right-[37.5rem]" />

          <SubInfo
            srcImg={require("../../../public/img/secure.svg")}
            alt={"secure"}
            title={"Segurança"}
            description={
              "Curabitur tempor, nunc eu aliquet mollis, dolor risus bibendum magna, sed facilisis urna turpis."
            }
          />
          <div className="linhaInfo top-[85rem] right-[17.5rem]" />

          <SubInfo
            srcImg={require("../../../public/img/earnings.svg")}
            alt={"earnings"}
            title={"Lucros"}
            description={
              "Curabitur tempor, nunc eu aliquet mollis, dolor risus bibendum magna, sed facilisis urna turpis."
            }
          />
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L48,26.7C96,53,192,107,288,112C384,117,480,75,576,101.3C672,128,768,224,864,224C960,224,1056,128,1152,90.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
