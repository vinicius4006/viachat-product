import Image from "next/image";
import { actions } from "../../contexts/AppContext/actions";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { GlobalContext } from "../../contexts/AppContext/index";

export default React.memo(function NewCard({
  icone,
  alt,
  label,
  valor,
  visiblePlusMinus = false,
}) {
  const globalState = useContext(GlobalContext);

  const {
    state: { limpar, resultado },
  } = globalState;

  const [unidade, setUnidade] = useState(1);
  const [value, setValue] = useState(valor);

  let operadores = {
    preco4: 59.9,
    preco16: 54.9,
    preco31: 49.9,
  };

  const resultadoCard = (num) => {
    if (alt == "people") {
      if (num < 4) {
        setValue(num * valor);
        return num * valor;
      } else if (num >= 4 && num < 16) {
        setValue(num * operadores.preco4);
        return num * operadores.preco4;
      } else if (num >= 16 && num < 31) {
        setValue(num * operadores.preco16);
        return num * operadores.preco16;
      } else {
        setValue(num * operadores.preco31);
        return num * operadores.preco31;
      }
    } else {
      setValue(num * valor);
      return (num * valor == 0 ? 1 * valor : num * valor);
    }
  };
  const aumentarUnidade = () => {
    setUnidade((count) => {
      let num = count + 1;
      //resultadoCard(num)
      globalState.dispatch({
        type: actions.CHANGE_RESULT,
        payload:
          alt == "people"
            ? resultado - resultadoCard(num - 1) + resultadoCard(num)
            : resultado + resultadoCard(num) / num,
      });

      return num;
    });
  };

  const diminuirUnidade = () => {
    if (unidade > 0) {
      setUnidade((count) => {
        let num = count - 1;
        //resultadoCard(num)
        globalState.dispatch({
          type: actions.CHANGE_RESULT,
          payload:
            alt == "people"
              ? resultado - resultadoCard(num + 1) + resultadoCard(num)
              : resultado -
                (num != 0 ? resultadoCard(num) / num : resultadoCard(num) / (num + 1)),
        });

        return num;
      });
    }
  };

  useEffect(() => {
    if (globalState.state.limpar) {
      setValue(valor);
      setUnidade(1);
    }
  }, [globalState, valor, unidade]);

  console.log("Build Card");
  return (
    <>
      <div
        className={`w-[15rem] h-[10rem] ${
          visiblePlusMinus
            ? "bg-[#fff] border-[#FFC738]"
            : "bg-white border-[0.3rem]"
        }  shadow-md   border-[0.3rem]
        border-blue-200 rounded-[15rem] 
       flex flex-col items-center justify-center`}
      >
        <Image
          src={icone}
          alt={alt}
          width={visiblePlusMinus ? 70 : 40}
          height={visiblePlusMinus ? 70 : 40}
        />

        <p
          className={`md:-mt-2 text-base md:text-base ${
            visiblePlusMinus ? "text-lg md:text-2xl text-black" : ""
          }`}
        >
          <span className={`relative top-3`}> {label}</span>
        </p>

        {visiblePlusMinus ? (
          <div className="text-2xl font-bold">
            <button
              className="absolute top-16 bg-blue-200 md:hover:bg-blue-100    
              transition-all duration-300 md:hover:scale-125 rounded-full p-2 shadow-md 
text-xs left-6"
              onClick={() => {
                globalState.dispatch({
                  type: actions.CLEAN_ALL,
                  payload: !limpar,
                });
              }}
            >
              LIMPAR
            </button>
            <span className="relative top-2 font-kroneOne text-lg text-gray-900">
              R$ {Number(resultado).toFixed(2)}
            </span>
          </div>
        ) : (
          <>
            <span className="text-lg relative top-3 md:text-xl font-kroneOne">
              R$ {Number(value).toFixed(2)}
            </span>

            <div className="flex justify-between mt-5">
              <div className="container">
                <span className="next" onClick={aumentarUnidade}></span>
                <span className="prev" onClick={diminuirUnidade}></span>
                <div className="box">
                  <span>{unidade}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
});
