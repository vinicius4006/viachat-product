import Image from "next/image";
import { useWindowSize } from "../../hooks/hook";
export const SubInfo = ({ srcImg, altImg, title, description }) => {
  const size = useWindowSize();
  return (
    // className="estiloTipoGrid"

    <div
      className={`bg-white border-4 flex justify-center w-10/12 ml-auto mr-auto 
      md:w-7/12 mb-2 rounded-lg duration-500 shadow-lg shadow-slate-400`}
      // onMouseOver={() => setShowMore(true)}
      // onMouseOut={() => setShowMore(true)}
    >
      {/* className="pText" */}
      <div className={`mt-2 p-5`}>
        <p className="text-xl md:text-2xl font-medium text-[#207175]">{title}</p>
        <div className="w-64 h-0.5 bg-black my-4" />
        {/* className="spanText" */}
        <div className="text-base md:text-xl mt-2 h-full">
          <span>{description}</span>
        </div>
      </div>
      <div
        className="absolute -translate-y-8 translate-x-[9rem]
       md:translate-x-40 duration-500 ease-in-out"
      >
        <Image src={srcImg} alt={altImg} width={70} height={70} />
      </div>
    </div>
  );
};
