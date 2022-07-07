import { useEffect, useState } from "react";
import { TitleSection } from "../infoGeral/titleSection";
import Slider from "react-slick";
import Lottie from "react-lottie";
import Image from "next/image";
import { useWindowSize } from "../heroSection/hook";

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
  animationData: require("../../../public/img/lotties/sucess.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="flex justify-center items-center cursor-pointer md:ml-2
      bg-[#00C8C4] rounded-3xl absolute bottom-[-12vh] md:bottom-auto md:top-[27.18rem] left-[11rem] md:left-[10rem]"
      onClick={onClick}
    >
      <Image
        src={require("../../../public/img/arrow-right.svg")}
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
      className="flex justify-center items-center cursor-pointer
      bg-[#00C8C4] rounded-3xl absolute top-[14rem] md:top-[27.18rem] left-[6.6rem] md:left-[6.4rem] 
      "
      onClick={onClick}
    >
      <Image
        src={require("../../../public/img/arrow-left.svg")}
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
    <div className="w-full bg-[#009de163] relative md:bottom-10 top-[3rem] md:top-auto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L48,26.7C96,53,192,107,288,112C384,117,480,75,576,101.3C672,128,768,224,864,224C960,224,1056,128,1152,90.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <section className="flex flex-col items-center">
        <TitleSection
          attributes={"text-center"}
          topTitle={"Plataforma completa"}
          title={"Tudo em um lugar só"}
          attTitle={'text-6xl mb-2'}
          subTitle={
            "Conecte todos em um só lugar e tenha gerenciamento e controle de todos os processos"
          }
          attSubTitle={"ml-auto mr-auto"}
        />
        <div
          className="absolute flex flex-col md:flex-row w-full md:w-[80rem] h-[25rem] 
          
        justify-between items-center top-[22rem] md:top-[30rem]"
        >
          <div className="absolute bg-blob-complexity bg-cover bg-right-top h-[25rem] md:h-[42rem] w-full top-[12rem] md:top-[18rem]" id="duvidas" />
          <div className="flex flex-col items-center gap-[1rem] md:gap-[3rem]">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center md:max-w-[20rem]">
                <Lottie
                  options={{ ...defaultOptions, loop: animation }}
                  width={50}
                  height={50}
                />
                <p className="text-sm w-[12rem] ml-5 font-semibold">
                  Eficiência
                </p>
              </div>
              <div className="flex items-center md:max-w-[20rem]">
                <Lottie
                  options={{ ...defaultOptions, loop: animation }}
                  width={50}
                  height={50}
                />
                <p className="text-sm w-[12rem] ml-5 font-semibold">
                  Prático
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center md:max-w-[20rem]">
                <Lottie
                  options={{ ...defaultOptions, loop: animation }}
                  width={50}
                  height={50}
                />
                <p className="text-sm w-[12rem] ml-5 font-semibold">
                  Sem atrasos
                </p>
              </div>
              <div className="flex items-center md:max-w-[20rem]">
                <Lottie
                  options={{ ...defaultOptions, loop: animation }}
                  width={50}
                  height={50}
                />
                <p className="text-sm w-[12rem] ml-5 font-semibold">
                  Controle
                </p>
              </div>
            </div>
          </div>
          <div className="w-10/12 md:w-7/12 mt-8 md:ml-10">
            <Slider {...settings}>
              <div>
                <Image
                  src={require("../../../public/img/dashboard.png")}
                  className={"rounded-xl"}
                  alt={"dashboard"}
                  width={widthSvg}
                  height={heightSvg}
                />
              </div>
              <div>
                <Image
                  src={require("../../../public/img/chat.png")}
                  className={"rounded-xl"}
                  alt={"chat"}
                  width={widthSvg}
                  height={heightSvg}
                />
              </div>
              <div>
                <Image
                  src={require("../../../public/img/analises.png")}
                  className={"rounded-xl"}
                  alt={"analises"}
                  width={widthSvg}
                  height={heightSvg}
                />
              </div>
              <div>
                <Image
                  src={require("../../../public/img/monitoramento.png")}
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
