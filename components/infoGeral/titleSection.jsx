export const TitleSection = ({attributes, topTitle, title, attTitle, subTitle, attSubTitle}) => {
    return (
        <div className={`flex-col ${attributes}`}>
        <h1 className="md:text-base text-base text-[#4c77a9] uppercase tracking-wider">
          {topTitle}
        </h1>
        <h1 className={`${attTitle}`}>{title}</h1>
        <p className={`md:text-base text-gray-500 max-w-[15rem] ${attSubTitle}`}>
          {subTitle}
        </p>
      </div>  
    )
}