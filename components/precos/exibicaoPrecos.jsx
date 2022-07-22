import { useWindowSize } from "../../hooks/hook";
import React from "react";
import { ButtonExperimente } from "../heroSection/buttonExperiment";
import { Cards } from "./cards";
import { AppContext } from "../../contexts/AppContext";

export default React.memo(function Exibicao() {
  const size = useWindowSize();
  console.log("Exibicao");
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center font-medium text-white">
        Faça aqui sua <span className="underline">simulação</span>
      </h1>
      <p className="text-xl w-10/12 md:w-1/3 text-center my-5 text-white">
        Faça o seu plano personalizado que se encaixe com o seu orçamento
      </p>
      <div className="flex flex-col items-center">
        <div className="md:flex">
          <AppContext>
            <Cards />
          </AppContext>
        </div>
        <span className="text-base mt-8 text-center w-8/12 md:w-auto">
          *Os valores mostrados serão pagos mensalmente
        </span>
        <div
          className=" ml-5 mt-12 md:mt-[5rem] text-2xl text-center 
        md:text-4xl text-white flex flex-col items-center"
        >
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
      </div>
    </section>
  );
});
