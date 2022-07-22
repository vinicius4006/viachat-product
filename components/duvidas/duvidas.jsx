import React, { useEffect } from "react";

import { TitleSection } from "../infoGeral/titleSection";
import Image from "next/image";

export const Duvidas = () => {
  useEffect(() => {
    console.log("Build Duvidas");
  }, []);
  return (
    <>
      <div
        className="w-11/12 md:w-8/12 flex justify-center relative mt-16 md:mt-32
       bg-blobscene-top bg-right-bottom bg-cover rounded-2xl py-7 md:p-10 shadow-md"
      >
        <section>
          <TitleSection
            attributes={"text-center mb-10"}
            title={"Dúvidas Frequentes"}
            attTitle={"text-5xl"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col md:flex-row md:items-center max-w-full">
              <Image
                src={require("../../public/img/question.svg")}
                alt={"altImg"}
                width={50}
                height={50}
              />
              <div className="flex flex-col ml-5 w-10/12 mt-5">
                <span>Curabitur laoreet, mauris vel blandit fringilla?</span>
                <p className="text-sm mt-2 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                  consequat velit. Curabitur est nibh, varius in tellus nec,
                  mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center max-w-full">
              <Image
                src={require("../../public/img/question.svg")}
                alt={"altImg"}
                width={50}
                height={50}
              />
              <div className="flex flex-col ml-5 w-10/12 mt-5">
                <span>Curabitur laoreet, mauris vel blandit fringilla?</span>
                <p className="text-sm mt-2 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                  consequat velit. Curabitur est nibh, varius in tellus nec,
                  mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center max-w-full">
              <Image
                src={require("../../public/img/question.svg")}
                alt={"altImg"}
                width={50}
                height={50}
              />
              <div className="flex flex-col ml-5 w-10/12 mt-5">
                <span>Curabitur laoreet, mauris vel blandit fringilla?</span>
                <p className="text-sm mt-2 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                  consequat velit. Curabitur est nibh, varius in tellus nec,
                  mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center max-w-full">
              <Image
                src={require("../../public/img/question.svg")}
                alt={"altImg"}
                width={50}
                height={50}
              />
              <div className="flex flex-col ml-5 w-10/12 mt-5">
                <span>Curabitur laoreet, mauris vel blandit fringilla?</span>
                <p className="text-sm mt-2 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                  consequat velit. Curabitur est nibh, varius in tellus nec,
                  mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
