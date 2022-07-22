import { useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { SubInfo } from "./cardSubInfo";
import { TitleSection } from "./titleSection";

export const InfoGeral = () => {
  useEffect(() => {
    console.log("Build InfoGeral");
    console.log("useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  return (
    <div className="w-full h-full overflow-hidden pb-14 rounded-t-[5rem] md:rounded-t-[15rem] bg-white">
      <section
        className="w-full h-full flex flex-col items-center
          mt-5 lg:mt-16"
      >
        <div className="flex w-full justify-around md:mb-16">
          <div className="hidden md:flex flex-col shadow-lg p-5 rounded-lg shadow-slate-400">
            <div className="transform-translate-y-9">
              <Image
                src={require("../../public/img/viachat-dashboard.png")}
                alt="viachat"
                width={419.7}
                height={227.7}
                className="rounded-md"
              />
            </div>
          </div>
          <TitleSection
            attributes={"text-center md:mt-auto md:mb-auto"}
            topTitle={"conheça nosso produto"}
            title={"Feito para Você"}
            attTitle={"md:text-5xl text-4xl"}
            subTitle={
              "Contruído sob medida para que suas necessidades sejam atendidas"
            }
            attSubTitle={"ml-auto mr-auto mt-3"}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
          <div className="bg-white shadow-lg w-10/12 md:w-1/5 rounded-2xl">
            <span className="text-[#4FD1D9] font-bold text-4xl p-2">64%</span>
            <p className="p-2 ml-2">
              dos brasileiros preferem ser atendidas nos canais digitais das
              empresas.
              <br />
              <strong>Fonte: Sercom</strong>
            </p>
          </div>
          <div className="bg-white shadow-lg w-10/12 md:w-1/4 scale-110 md:scale-125 rounded-2xl mt-5">
            <span className="text-[#4FD1D9] font-bold text-4xl p-2">80%</span>
            <p className="p-2 ml-2">
              das interações comerciais entre fornecedores e compradores vão
              ocorrer em ambiente digital até <strong>2025</strong>.
              <br />
              <strong>Fonte: Future of Sales</strong>
            </p>
          </div>
          <div className="bg-white shadow-lg w-10/12 md:w-1/5 rounded-2xl mt-5">
            <span className="text-[#4FD1D9] font-bold text-4xl p-2">87%</span>
            <p className="p-2 ml-2">
              das organizações apostam na experiência digital como vantagem
              competitiva
              <br />
              <strong> Fonte: Progress </strong>
            </p>
          </div>
        </div>
        <span
          className="text-[#207175] font-medium text-3xl md:text-5xl relative top-16 mb-12 
        md:mb-auto md:mt-5 md:w-9/12 text-center"
        >
          Crie conversas que vão surpreender seu cliente em qualquer momento da
          jornada
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-36 gap-6 md:gap-12">
          <div className="md:translate-x-16 scale-90 md:scale-100">
            <SubInfo
              srcImg={require("../../public/img/one.svg")}
              alt={"one"}
              title={"Descoberta"}
              description={
                "Personalização do conteúdo de acordo com o público almejado, mude conforme o necessário."
              }
            />
          </div>

          <div className="md:-translate-x-[20vh] md:translate-y-10 scale-90 md:scale-100">
            <SubInfo
              srcImg={require("../../public/img/two.svg")}
              alt={"two"}
              title={"Atendimento Pré-Venda"}
              description={`
              
Automatize seus atendimentos ou torne ainda melhor seus atendimentos convencionais e
também agende com seus clientes.

              `}
            />
          </div>
          <div className="md:translate-x-16 scale-90 md:scale-100">
            <SubInfo
              srcImg={require("../../public/img/three.svg")}
              alt={"three"}
              title={"Seleção"}
              description={`
            
Faça perguntas direcionadas de acordo com o tipo de cliente.
            `}
            />
          </div>
          <div className="md:-translate-x-[20vh] md:translate-y-10 scale-90 md:scale-100">
            <SubInfo
              srcImg={require("../../public/img/four.svg")}
              alt={"four"}
              title={"Compra"}
              description={`
            
Quer cadastrar mais atendentes? Ou números? Pela plataforma você faz tudo isso,
de maneira prática e rápida.
            `}
            />
          </div>

          <div className="md:translate-x-16 scale-90 md:scale-100">
            <SubInfo
              srcImg={require("../../public/img/five.svg")}
              alt={"five"}
              title={"Atendimento Pós-Venda"}
              description={`
            
Suporte dedicado para toda sua equipe pois sabemos que um bom suporte faz diferença na vida do cliente.
            `}
            />
          </div>
          <div className="md:-translate-x-[20vh] md:translate-y-10 scale-90 md:scale-100">
            <SubInfo
              srcImg={require("../../public/img/six.svg")}
              alt={"six"}
              title={"Retenção e fidelidade"}
              description={`
            
Saiba o nível de satisfação de seus clientes, através de perguntas personalizadas e cresça ainda mais 
a sua rede de clientes.
            `}
            />
          </div>
        </div>
        <div className="flex md:hidden flex-col shadow-lg p-5 rounded-lg shadow-slate-400 mt-8">
          <div className="transform-translate-y-9">
            <Image
              src={require("../../public/img/viachat-dashboard.png")}
              alt="viachat"
              width={419.7}
              height={227.7}
              className="rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
