import { Link as Li } from "react-scroll";
import Image from "next/image";
import {
  FaPhoneSquareAlt,
  FaCheckDouble,
  FaWrench,
  FaThumbsUp,
} from "react-icons/fa";

export const NewFooter = () => {
  return (
    <section className="newFooter w-full h-full bg-[#fff] flex flex-col font-semibold">
      <div className="flex flex-col justify-center items-center py-10">
        <div className="grid grid-flow-cols md:grid-cols-3 gap-5 mb-5 md:gap-36">
          <Li
            activeClass="home2"
            to="home2"
            smooth={true}
            offset={50}
            duration={500}
          >
            <div className="flex items-center w-full">
              <Image
                src={require("../../public/img/logo.png")}
                alt="logo"
                width={46}
                height={46}
              />
              <span className="w-2"></span>
              <span className=" text-[#00d7b5] text-4xl">ViaChat</span>
            </div>
          </Li>
          <div className="flex-col">
            <div className="text-[#00d7b5] flex justify-center items-center">
              <div className="text-lg">
                <FaPhoneSquareAlt />
              </div>
              <span className="w-2"></span>
              <span className="text-lg">Contato</span>
            </div>
            <span className="ml-5">contato@viasign.com.br</span>
          </div>

          <div className="flex flex-col">
            <div className="flex ">
              <div className="text-lg text-[#00d7b5] justify-center items-center">
                <FaCheckDouble />
              </div>
              <span className="w-2"></span>
              <span className="text-lg">Aumento nas vendas</span>
            </div>
            <div className="flex ">
              <div className="text-lg text-[#00d7b5] justify-center items-center">
                <FaWrench />
              </div>
              <span className="w-2"></span>
              <span className="text-lg">Suporte dedicado</span>
            </div>
            <div className="flex ">
              <div className="text-lg text-[#00d7b5] justify-center items-center">
                <FaThumbsUp />
              </div>
              <span className="w-2"></span>
              <span className="text-lg">Rápido e Prático</span>
            </div>
          </div>
        </div>
      
      </div>
      <div className="flex justify-center">
        <span>©2022 ViaChat. All rights reserved.</span>
       
      </div>
    </section>
  );
};
