import Image from "next/image";
import { actions } from "../../contexts/AppContext/actions";
import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../contexts/AppContext/index";

export const Card = ({ icone, alt, label, visiblePlusMinus = false }) => {
  const opsRes = useContext(GlobalContext);
  const [value, setValue] = useState(49.9);
  const [unidade, setUnidade] = useState(1);
  const [initialValue, setInitialValue] = useState(49.9);
  const {
    state: { resultado },
  } = opsRes;
  const {
    state: { limpar },
  } = opsRes;
  const aumentarUnidade = () => {
    setUnidade((count) => count + 1);
    setValue((count) => value + initialValue);
    opsRes.dispatch({
      type: actions.CHANGE_RESULT,
      payload: resultado + initialValue,
    });
  };

  const diminuirUnidade = () => {
    if (unidade > 0) {
      setUnidade((count) => count - 1);
      setValue((count) => value - initialValue);
      opsRes.dispatch({
        type: actions.CHANGE_RESULT,
        payload: resultado - initialValue,
      });
    }
  };

  useEffect(() => {
    console.log("Build Card");
    if (limpar || !limpar) {
      setUnidade(1);
      alt == "rob" ? setValue(99.9) : setValue(49.9);
      if (alt == "rob") {
        setValue(99.9);
      } else if (alt == "people") {
        setValue(69.9);
      } else {
        setValue(49.9);
      }
    }

    if (alt == "rob") {
      setValue((count) => (count = 99.9));
      setInitialValue((count) => (count = 99.9));
    }
    if (alt == "people") {
      setValue((count) => (count = 69.9));
      setInitialValue((count) => (count = 69.9));
    }
  }, [alt, limpar]);

  return (
    <>
      <div
        className={`w-[20rem] h-[15rem] bg-white shadow-md
        border-[0.5rem]  md:border-[0.5rem] border-blue-200 rounded-[15rem] 
       flex flex-col items-center justify-center`}
      >
        <Image
          src={icone}
          alt={alt}
          width={visiblePlusMinus ? 80 : 60}
          height={visiblePlusMinus ? 80 : 60}
        />

        <p
          className={`mt-2 text-base md:text-lg ${
            visiblePlusMinus ? "text-lg md:text-2xl" : ""
          }`}
        >
          {label}
        </p>
        {visiblePlusMinus ? (
          <div className="text-2xl font-bold">
            <button
              className="absolute bottom-28 bg-blue-200 md:hover:bg-blue-100 
              transition-all duration-300 md:hover:scale-125 rounded-full p-2 shadow-md 
text-xs left-9"
              onClick={() => {
                opsRes.dispatch({
                  type: actions.CLEAN_ALL,
                  payload: !limpar,
                });
              }}
            >
              LIMPAR
            </button>
            R$ {opsRes.state.resultado.toFixed(2)}
          </div>
        ) : (
          <>
            <span className="text-lg md:text-xl font-kroneOne">
              R$ {value.toFixed(2)}
            </span>
            {/* <div className="flex w-1/2 justify-between text-3xl text-white md:hidden">
              <span
                className="bg-black rounded-full p-1"
                onClick={aumentarUnidade}
              >
                +
              </span>
              <span className="text-black">{unidade}</span>
              <span
                className="bg-black rounded-full p-1"
                onClick={diminuirUnidade}
              >
                -
              </span>
            </div> */}
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
};
