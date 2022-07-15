
import { useEffect } from "react";
import { useWindowSize } from "../../hooks/hook";
import { TitleSection } from "../infoGeral/titleSection";
import { Card } from "./card";

export const Funcoes = () => {
  const size = useWindowSize();
  useEffect(() => {
    console.log("Build Funcoes");
  }, []);

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
          attTitle={"text-5xl mb-2"}
          subTitle={"Tudo o que sua empresa precisa e muito mais..."}
        />

        <div className="grid grid-flow-col grid-cols-4 w-full mx-auto mt-8 md:mt-0 md:ml-[4rem]">
          <Card
            srcIcone={require("../../public/img/lotties/shooting-stars.json")}
            title={"Destaque no atendimento"}
            description={
              "Agilidade em atender e entender as necessidades de cada cliente."
            }
          />
          <Card
            srcIcone={require("../../public/img/lotties/consultation.json")}
            title={"Comunicação rápida e clara"}
            description={
              "Ambientes personalizados para que você e seus clientes."
            }
          />
          <Card
            srcIcone={require("../../public/img/lotties/robot-assist.json")}
            title={"Automoção e produtividade"}
            description={
              "Bots personalizados de acordo com a necessidade presente"
            }
          />
          <Card
            srcIcone={require("../../public/img/lotties/layers.json")}
            title={"Funcionalidades de ponta"}
            description={
              "Tudo isso e muito mais para sua equipe trabalhar e atender bem."
            }
          />
        </div>
      </section>
    </div>
  );
};
