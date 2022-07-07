import Lottie from "react-lottie";
import { Card } from "./card";
import { useEffect, useState } from "react";
import { useWindowSize } from "../heroSection/hook";
import Slider from "react-slick";
import Image from "next/image";
import wppshare from "../../../public/img/lotties/wpp-share.json";
import instagram from "../../../public/img/lotties/instagram.json";
import messenger from "../../../public/img/lotties/messenger.json";
import telegram from "../../../public/img/lotties/telegram.json";
import robo from "../../../public/img/lotties/robot-assist.json";
import people from "../../../public/img/lotties/people.json";

import { defaultOptions } from "./defaultOptions";
import { ButtonExperimente } from "../heroSection/buttonExperiment";
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  //centerPadding: "-15px",
  slidesToShow: 1,
  speed: 100,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="flex justify-center items-center cursor-pointer
        bg-[#00C8C4] rounded-3xl absolute top-[18rem] left-[14rem]"
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
        bg-[#00C8C4] rounded-3xl absolute top-[18rem] left-[8rem] 
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
export const HeroSectionPreco = () => {
  const [widthSvg, setWidthSvg] = useState(0);
  const size = useWindowSize();

  useEffect(() => {
    console.log("Build HeroSection");
    setWidthSvg(size.width <= 760 ? 60 : 200);
  }, [size]);
  return (
    <div
      className="relative top-20 md:static
      "
    >
      {size.width <= 760 ? (
        <></>
      ) : (
        <>
          <div className="absolute left-5 top-[180rem]">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: wppshare,
              }}
              width={150}
              height={150}
            />
          </div>
          <div className="absolute left-[70rem] top-[176rem]">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: instagram,
              }}
              width={widthSvg}
              height={widthSvg}
            />
          </div>
          <div className="absolute left-[72rem] top-[197rem]">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: messenger,
              }}
              width={widthSvg}
              height={widthSvg}
            />
          </div>
          <div className="absolute left-auto bottom-[-185rem]">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: telegram,
              }}
              width={widthSvg}
              height={widthSvg}
            />
          </div>
          <div className="absolute top-[30rem] left-[20rem]">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: robo,
              }}
              width={widthSvg}
              height={widthSvg}
            />
          </div>
          <div className="absolute left-[73rem] bottom-[-190rem]">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: people,
              }}
              width={widthSvg}
              height={widthSvg}
            />
          </div>
        </>
      )}

      <section className=" flex flex-col justify-start items-center ">
        <h1 className="text-5xl text-center font-bold">
          Faça aqui sua <span className="underline">simulação</span>
        </h1>
        <p className="text-xl w-10/12 md:w-1/3 text-center my-5">
          Faça o seu plano personalizado que se encaixe com o seu orçamento
        </p>
        {size.width <= 760 ? (
          <Slider {...settings} className="w-full mx-auto">
            <Card
              alt={"wpp"}
              icone={require("../../../public/img/whatsapp.svg")}
              label={"Quantidade de números"}
              key={"wpp"}
            />
            <Card
              alt={"inst"}
              icone={require("../../../public/img/instagram.svg")}
              label={"Quantidade de perfis"}
              key={"inst"}
            />
            <Card
              alt={"mess"}
              icone={require("../../../public/img/messenger.svg")}
              label={"Quantidade de páginas"}
              key={"mess"}
            />

            <Card
              alt={"tele"}
              icone={require("../../../public/img/telegram.svg")}
              label={"Quantidade de números"}
              key={"tele"}
            />
            <Card
              alt={"rob"}
              icone={require("../../../public/img/robot.svg")}
              label={"Quantidade de bots"}
              key={"rob"}
            />
            <Card
              alt={"people"}
              icone={require("../../../public/img/people.svg")}
              label={"Quantidade de Atendentes"}
              key={"people"}
            />
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              alt={"wpp"}
              icone={require("../../../public/img/whatsapp.svg")}
              label={"Quantidade de números"}
              key={"wpp"}
            />
            <Card
              alt={"inst"}
              icone={require("../../../public/img/instagram.svg")}
              label={"Quantidade de perfis"}
              key={"inst"}
            />
            <Card
              alt={"mess"}
              icone={require("../../../public/img/messenger.svg")}
              label={"Quantidade de páginas"}
              key={"mess"}
            />

            <Card
              alt={"tele"}
              icone={require("../../../public/img/telegram.svg")}
              label={"Quantidade de números"}
              key={"tele"}
            />
            <Card
              alt={"rob"}
              icone={require("../../../public/img/robot.svg")}
              label={"Quantidade de bots"}
              key={"rob"}
            />
            <Card
              alt={"people"}
              icone={require("../../../public/img/people.svg")}
              label={"Quantidade de Atendentes"}
              key={"people"}
            />
            <div className="relative md:left-[22rem] right-auto">
              <Card
                alt={"results"}
                icone={require("../../../public/img/coin.svg")}
                label={"Total"}
                visiblePlusMinus={true}
                key={"results"}
              />
            </div>
          </div>
        )}

        <span className="mt-5 text-xs">
          *Os valores mostrados serão pagos mensalmente
        </span>
        <div className="relative top-[5rem] sm:hidden">
          {" "}
          <Card
            alt={"results"}
            icone={require("../../../public/img/coin.svg")}
            label={"Total"}
            visiblePlusMinus={true}
            key={"results"}
          />
        </div>

        <div className=" ml-5 mt-[8rem] text-2xl text-center md:text-4xl text-white flex flex-col items-center">
          <span>
            {" "}
            Curtiu o orçamento?
            {size.width <= 760 ? (
              <>
                <br />
              </>
            ) : (
              <></>
            )}{" "}
            E que tal um <i className="text-green-300 font-bold">Test Drive</i>{" "}
            ?{" "}
          </span>
          <ButtonExperimente />
        </div>
      </section>
    </div>
  );
};
