import Image from "next/image";

export const SubInfo = ({srcImg, altImg, title, description}) => {
    return (
        <div className="estiloTipoGrid">
            <Image
              src={srcImg}
              alt={altImg}
              width={100}
              height={100}
            />
            <p className="pText">{title}</p>
            <span className="spanText">
              {description}
            </span>
          </div>
    )
}