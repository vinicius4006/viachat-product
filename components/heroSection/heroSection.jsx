import Lottie from "react-lottie";
import { useEffect } from "react";
import React from "react";
import { useWindowSize } from "./hook";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonExperimente } from "./buttonExperiment";


export const HeroSection = () => {
  const widthSvg = 500
  const size = useWindowSize();

  useEffect(() => {
    console.log('Build HeroSection Main')
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    stop: true,
    animationData: require("../../public/img/lotties/whatsapp.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className={`mt-28 md:mt-24 w-full max-h-full overflow-hidden`}>
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-center
           text-center lg:text-4xl text-3xl space-y-2"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.7,
            
              },
            },
          }}
        >
          <div className="flex-col md:ml-20 mt-5 md:mt-auto">
            <h1 className="text-gray-900">
              Ambiente integrado com <span className="text-green-600 font-bold">WhatsApp</span>?
              <br /> O <span className="text-green-600 font-bold">melhor</span> pelo melhor <span className="underline">preço</span>
            </h1>
            <p className="text-sm mt-2 opacity-60">
              Tenha tudo perto de você com tecnologia de ponta <br /> e que satisfaça as necessidades da sua empresa
            </p>
           <ButtonExperimente />
          </div>
        </motion.div>
        {size.width <= 760 ? (
          <>
           <div className="my-8 ml-5">
           <Image
              src={require("../../public/img/wpp-mob.svg")}
              alt={"wpp-mob"}
              width={150}
              height={150}
              
            />
           </div>
          </>
        ) : (
          <>
            <Lottie
              options={defaultOptions}
              width={widthSvg}
              height={widthSvg}
            />
          </>
        )}
      </div>
    </section>
  );
};


