import { TitleSection } from "../../infoGeral/titleSection";
import Slider from "react-slick";
import Image from "next/image";
import { Card } from "../card";
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
      <Image
        src={require("../../../../public/img/arrow-right.svg")}
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
        bg-[#00C8C4] rounded-3xl absolute top-[18rem] md:top-[-5.18rem] left-[5rem] md:left-[50rem] 
        "
      onClick={onClick}
    >
      <Image
        src={require("../../../../public/img/arrow-left.svg")}
        alt={"arrow-left"}
        width={50}
        height={50}
      />
    </div>
  );
}
export const HeroSectionTeste = () => {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center">
      <TitleSection
        title={"Testando Outro Layout"}
        attTitle={"text-6xl font-semibold"}
        subTitle={"Faça já aqui"}
        attSubTitle={"text-center text-xl font-semibold"}
      />
      <Slider
        {...settings}
        className="w-9/12 mx-auto mt-8 md:mt-0 md:ml-[8rem]"
      >
        <Card
          alt={"wpp"}
          icone={require("../../../../public/img/whatsapp.svg")}
          label={"Quantidade de números"}
          key={"wpp"}
        />
        <Card
          alt={"inst"}
          icone={require("../../../../public/img/instagram.svg")}
          label={"Quantidade de perfis"}
          key={"inst"}
        />
        <Card
          alt={"mess"}
          icone={require("../../../../public/img/messenger.svg")}
          label={"Quantidade de páginas"}
          key={"mess"}
        />

        <Card
          alt={"tele"}
          icone={require("../../../../public/img/telegram.svg")}
          label={"Quantidade de números"}
          key={"tele"}
        />
        <Card
          alt={"rob"}
          icone={require("../../../../public/img/robot.svg")}
          label={"Quantidade de bots"}
          key={"rob"}
        />
        <Card
          alt={"people"}
          icone={require("../../../../public/img/people.svg")}
          label={"Quantidade de Atendentes"}
          key={"people"}
        />

        <Card
          alt={"results"}
          icone={require("../../../../public/img/coin.svg")}
          label={"Total"}
          visiblePlusMinus={true}
          key={"results"}
        />
      </Slider>
    </section>
  );
};
