import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faCircleCheck,
  faHeadset,
  faMoneyBill,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    console.log('Build Footer')
  }, [])
  return (
    <footer className=" text-black">
      <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:px-36">
        <div className="flex flex-col items-start w-screen lg:w-1/2 p-5 font-josefin-sans">
          <span className="text-3xl p-2 font-kroneOne">ViaChat</span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            contato@viachat.com.br
          </span>
          <div>
            <span className="mt-5 text-sm">
              {" "}
              <FontAwesomeIcon icon={faLocationDot} className="mr-4" />
              Rua Odinéia Martins Viana, 30 Conjunto Planalto II Imperatriz - MA
            </span>
          </div>
        </div>

        <div className="flex flex-col mb-5 font-semibold h-36 justify-around lg:mt-5">
          <span>
            <FontAwesomeIcon icon={faCircleCheck} className="h-5 mr-2" />{" "}
            Aumento nas vendas
          </span>
          <span>
            <FontAwesomeIcon icon={faHeadset} className=" h-5 mr-2" /> Suporte
            dedicado
          </span>
          <span className="">
            <FontAwesomeIcon icon={faMoneyBill} className="h-5 mr-2" />{" "}
            Pagamento 100% seguro
          </span>
          <span>
            <FontAwesomeIcon icon={faFileContract} className="h-5 mr-3" />{" "}
            Termos e política de privacidade
          </span>
        </div>

        <div className="w-1/6 lg:w-1/12 lg:mt-8">
          <Image
            src={require("../../../public/img/logo.png")}
            alt={"logo"}
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="font-josefin-sans mt-8 flex justify-center">
        <span className="font-semibold justify-center pb-4">
          ©2022 ViaChat. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
