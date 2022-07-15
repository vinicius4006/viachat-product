import Image from "next/image";
import { useEffect } from "react";
import Slider from "react-slick";
import { useWindowSize } from "../heroSection/hook";
import { TitleSection } from "../infoGeral/titleSection";
import { Card } from "./card";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "12px",
  slidesToShow: 3,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="flex justify-center items-center cursor-pointer
      bg-[#00C8C4] rounded-3xl absolute top-[18rem] md:top-[-5.18rem] left-[10rem] md:left-[55rem]"
      onClick={onClick}
    >
      <Image src={require('../../public/img/arrow-right.svg')} alt={'arrow-right'} width={50} height={50} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center items-center cursor-pointer
      bg-[#00C8C4] rounded-3xl absolute top-[18rem] md:top-[-5.18rem] left-[5rem] md:left-[50rem] 
      "
      onClick={onClick}
    >
      <Image src={require('../../public/img/arrow-left.svg')} alt={'arrow-left'} width={50} height={50} />
    </div>
  );
}

export const Funcoes = () => {
  const size = useWindowSize();
useEffect(() => {
console.log('Build Funcoes')
}, [])


  return (
    <div className="w-full bg-blob-middle bg-no-repeat bg-left-top">
      <section
        className=" flex flex-col
         h-[40rem] overflow-hidden md:relative md:bottom-24 
        "
      >
        <TitleSection
          attributes={"text-left ml-12 md:ml-48 mb-20 md:mb-40"}
          topTitle={"escale sua empresa"}
          title={"O que você ganha?"}
          attTitle={'text-5xl mb-2'}
          subTitle={
            "Tudo o que sua empresa precisa e muito mais..."
          }
        />

        <Slider
          {...settings}
          className="w-9/12 mx-auto mt-8 md:mt-0 md:ml-[8rem]"
        >
          <Card
            srcIcone={require("../../public/img/lotties/shooting-stars.json")}
            title={"Destaque no atendimento"}
            description={"Agilidade em atender e entender as necessidades de cada cliente."}
            
          />
          <Card
            srcIcone={require("../../public/img/lotties/consultation.json")}
            title={"Comunicação rápida e clara"}
            description={"Ambientes personalizados para que você e seus clientes."}
            
          />
          <Card
            srcIcone={require("../../public/img/lotties/robot-assist.json")}
            title={"Automoção e produtividade"}
            description={"Bots personalizados de acordo com a necessidade presente"}
            
          />
          <Card
            srcIcone={require("../../public/img/lotties/layers.json")}
            title={"Funcionalidades de ponta"}
            description={"Tudo isso e muito mais para sua equipe trabalhar e atender bem."}
            
          />
          
        </Slider>
       

      </section>
    </div>
  );
};
