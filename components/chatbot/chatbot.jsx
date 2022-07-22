import Image from "next/image";
export const ChatBot = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FFFFFF] w-full h-full pt-28 justify-between items-center">
      <div className="relative">
        {/* <div className="absolute w-10 h-10 bg-black">
          <Image
            src={require("../../public/img/handPhone.jpg")}
            alt="mobile"
            width={900}
            height={900}
          />
        </div> */}

        <div className=" w-[15rem] md:ml-[15rem]">
          <video loop autoPlay>
            <source src="http://10.1.2.218/chat1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="p-5 md:p-0 md:w-1/2 md:mr-14 text-center md:text-start">
        <h1 className="font-bold text-3xl my-5">
          Escolha nunca deixar seus clientes na mão com o incrível ChatBot
        </h1>

        <p className="md:w-9/12">
          Atenda seus clientes diariamente por 24h, O chatbot organiza e
          direciona seus atendimentos para o setor que o ajudará diretamente, de
          forma rápida e ágil, sem precisar se preocupar com filas de espera.
        </p>
      </div>
    </div>
  );
};
