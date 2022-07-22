import { useEffect, useState } from "react";
import { TitleSection } from "../infoGeral/titleSection";
import Slider from "react-slick";
import Lottie from "react-lottie";
import Image from "next/image";
import { useWindowSize } from "../../hooks/hook";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToShow: 1,
  slidesToScroll: 1,
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

const defaultOptions = {
  autoplay: true,
  animationData: require("../../public/img/lotties/sucess.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="hidden md:flex justify-center items-center cursor-pointer md:ml-2
      bg-[#00C8C4] rounded-3xl absolute bottom-[-12vh] md:bottom-auto md:top-[27.18rem] left-[11rem] md:left-[10rem]"
      onClick={onClick}
    >
      <Image
        src={require("../../public/img/arrow-right.svg")}
        alt={"arrow-right"}
        width={50}
        height={50}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="hidden md:flex justify-center items-center cursor-pointer
      bg-[#00C8C4] rounded-3xl absolute top-[14rem] md:top-[27.18rem] left-[6.6rem] md:left-[6.4rem] 
      "
      onClick={onClick}
    >
      <Image
        src={require("../../public/img/arrow-left.svg")}
        alt={"arrow-left"}
        width={50}
        height={50}
      />
    </div>
  );
}

export const Chat = () => {
  const [widthSvg, setWidthSvg] = useState(839.4);
  const [heightSvg, setHeightSvg] = useState(455.4);
  const [animation, setAnimation] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    console.log('Build Chat')
    setWidthSvg(size.width <= 760 ? 363.74 : 755.46);
    setHeightSvg(size.width <= 760 ? 197.288 : 409.86);
  }, [size]);

  return (
    <div className="w-full h-full pt-20 pb-32 bg-white rounded-b-[10rem]">
    
      <section className="flex flex-col items-center">
        <TitleSection
          attributes={"text-center"}
          topTitle={"Plataforma completa"}
          title={"Tudo em um lugar só"}
          attTitle={'text-5xl mb-2'}
          subTitle={
            "Conecte todos em um só lugar e tenha gerenciamento e controle de todos os processos"
          }
          attSubTitle={"ml-auto mr-auto"}
        />
        <div
          className="flex flex-col md:flex-row w-full md:w-[80rem] h-[25rem] 
          
        justify-between items-center top-[22rem] md:top-[30rem]"
        >
          <div className=" bg-blob-complexity bg-cover bg-right-top h-[25rem] md:h-[42rem] w-full top-[12rem] md:top-[18rem]" id="duvidas" />
          <div className="flex flex-col items-center gap-[1rem] md:gap-[3rem]">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center md:max-w-[20rem]">
                <Lottie
                  options={{ ...defaultOptions, loop: animation }}
                  width={50}
                  height={50}
                  style={{cursor: 'context-menu'}}
                />
                <p className="text-xl w-[12rem] ml-5 font-semibold">
                  Dashboard
                </p>
              </div>
              <div className="flex items-center md:max-w-[20rem]">
                <Lottie
                  options={{ ...defaultOptions, loop: animation }}
                  width={50}
                  height={50}
                  style={{cursor: 'context-menu'}}
                />
                <p className="text-xl w-[12rem] ml-5 font-semibold">
                  Chat
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row relative bottom-3">
              <div className="flex items-center md:max-w-[20rem]">
                <Lottie
                  options={{ ...defaultOptions, loop: animation }}
                  width={50}
                  height={50}
                  style={{cursor: 'context-menu'}}
                />
                <p className="text-xl w-[12rem] ml-5 font-semibold">
                  Analytics
                </p>
              </div>
              <div className="flex items-center md:max-w-[20rem]">
                <Lottie
                  options={{ ...defaultOptions, loop: animation }}
                  width={50}
                  height={50}
                  style={{cursor: 'context-menu'}}
                />
                <p className="text-xl w-[12rem] ml-5 font-semibold">
                  Contatos
                </p>
              </div>
            </div>
          </div>
          <div className="w-10/12 md:w-7/12 mt-8 md:ml-10">
            <Slider {...settings}>
              <div>
                <Image
                  src={require("../../public/img/dashboard.png")}
                  className={"rounded-xl"}
                  alt={"dashboard"}
                  width={widthSvg}
                  height={heightSvg}
                />
              </div>
              <div>
                <Image
                  src={require("../../public/img/chat.png")}
                  className={"rounded-xl"}
                  alt={"chat"}
                  width={widthSvg}
                  height={heightSvg}
                />
              </div>
              <div>
                <Image
                  src={require("../../public/img/analises.png")}
                  className={"rounded-xl"}
                  alt={"analises"}
                  width={widthSvg}
                  height={heightSvg}
                />
              </div>
              <div>
                <Image
                  src={require("../../public/img/monitoramento.png")}
                  className={"rounded-xl"}
                  alt={"monitoria"}
                  width={widthSvg}
                  height={heightSvg}
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    
    </div>
  );
};
