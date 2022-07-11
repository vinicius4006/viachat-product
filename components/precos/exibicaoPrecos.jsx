import CardPreco from "./cardPreco";
import { useWindowSize } from "../heroSection/hook";

import { ButtonExperimente } from "../heroSection/buttonExperiment";
export const Exibicao = () => {
  const size = useWindowSize();
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center font-bold">
        Faça aqui sua <span className="underline">simulação</span>
      </h1>
      <p className="text-xl w-10/12 md:w-1/3 text-center my-5">
        Faça o seu plano personalizado que se encaixe com o seu orçamento
      </p>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardPreco
            alt={"wpp"}
            icone={require("../../public/img/whatsapp.svg")}
            label={"Quantidade de números"}
            key={"wpp"}
          />
          <CardPreco
            alt={"inst"}
            icone={require("../../public/img/instagram.svg")}
            label={"Quantidade de perfis"}
            key={"inst"}
          />
          <CardPreco
            alt={"mess"}
            icone={require("../../public/img/messenger.svg")}
            label={"Quantidade de páginas"}
            key={"mess"}
          />

          <CardPreco
            alt={"tele"}
            icone={require("../../public/img/telegram.svg")}
            label={"Quantidade de números"}
            key={"tele"}
          />
          <CardPreco
            alt={"rob"}
            icone={require("../../public/img/robot.svg")}
            label={"Quantidade de bots"}
            key={"rob"}
          />
          <CardPreco
            alt={"people"}
            icone={require("../../public/img/people.svg")}
            label={"Quantidade de Atendentes"}
            key={"people"}
          />
          <div className="relative md:left-[22rem] right-auto">
            <CardPreco
              alt={"results"}
              icone={require("../../public/img/coin.svg")}
              label={"Total"}
              visiblePlusMinus={true}
              key={"results"}
            />
          </div>
        </div>
        <span className="mt-5 text-xs">
          *Os valores mostrados serão pagos mensalmente
        </span>
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
      </div>
    </section>
  );
};
