import { globalState as globalValues } from "../../contexts/AppContext/data";
import NewCard from "./newCard";
export const Cards = () => {
  console.log("cards");
  const { whatsapp, instagram, messenger, telegram, bots, atendentes } =
    globalValues;
  return (
    <div className="flex flex-col md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NewCard
          alt={"wpp"}
          icone={require("../../public/img/whatsapp.svg")}
          label={"Quantidade de números"}
          key={"wpp"}
          valor={whatsapp}
        />
        <NewCard
          alt={"inst"}
          icone={require("../../public/img/instagram.svg")}
          label={"Quantidade de perfis"}
          key={"inst"}
          valor={instagram}
        />
        <NewCard
          alt={"mess"}
          icone={require("../../public/img/messenger.svg")}
          label={"Quantidade de páginas"}
          key={"mess"}
          valor={messenger}
        />

        <NewCard
          alt={"tele"}
          icone={require("../../public/img/telegram.svg")}
          label={"Quantidade de números"}
          key={"tele"}
          valor={telegram}
        />
        <NewCard
          alt={"rob"}
          icone={require("../../public/img/robot.svg")}
          label={"Quantidade de bots"}
          key={"rob"}
          valor={bots}
        />
        <NewCard
          alt={"people"}
          icone={require("../../public/img/people.svg")}
          label={"Quantidade de Atendentes"}
          key={"people"}
          valor={atendentes}
        />
      </div>
      <div className="relative md:top-28 top-3">
        <NewCard
          alt={"results"}
          icone={require("../../public/img/coin.svg")}
          label={"Total"}
          visiblePlusMinus={true}
          key={"results"}
          valor={
            whatsapp + instagram + telegram + atendentes + bots + messenger
          }
        />
      </div>
    </div>
  );
};
// whatsapp + instagram + telegram + atendentes + bots + messenger
