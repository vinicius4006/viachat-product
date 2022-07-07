export const TitleSection = ({attributes, topTitle, title, attTitle, subTitle, attSubTitle}) => {
    return (
        <div className={`flex-col ${attributes}`}>
        <h6 className="text-xs text-[#4c77a9] uppercase tracking-wider">
          {topTitle}
        </h6>
        <h1 className={`${attTitle}`}>{title}</h1>
        <p className={`text-sm text-gray-500 max-w-[20rem] ${attSubTitle}`}>
          {subTitle}
        </p>
      </div>  
    )
}