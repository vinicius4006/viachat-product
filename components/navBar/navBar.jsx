import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link as Li } from "react-scroll";

export const NavBar = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log("Build Header");
  }, []);
  console.log('NAVBAR')
  return (
    <>
      <nav className="shadow-sm bg-white fixed w-full z-10 pt-2">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            {/* First Block */}
            <div className="flex items-center mx-5 md:mx-20 justify-between w-full">
              <div className="flex w-full justify-between md:px-36 items-center flex-shrink-0">
                <div className="text-xl cursor-pointer mr-16">
                  <Li
                    activeClass="home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Image
                      src={require("../../public/img/logo.png")}
                      alt="logo"
                      width={46}
                      height={46}
                    />
                  </Li>

                  <Li
                    activeClass="home2"
                    to="home2"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="font-kroneOne text-[#00d7b5] text-center relative bottom-3 left-1"
                  >
                     ViaChat
                  </Li>
                </div>
                <div className="hidden md:block">
                  <div className="flex justify-between w-[25rem] items-baseline space-x-4 text-[0.95rem]">
                    <Li
                      activeClass="precos"
                      to="precos"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="efeitoUnderline"
                    >
                      Quanto custa?
                    </Li>

                    <Li
                      activeClass="duvidas"
                      to="duvidas"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="efeitoUnderline"
                    >
                      Dúvidas
                    </Li>

                    <Li
                      activeClass="contato"
                      to="contato"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="efeitoUnderline"
                    >
                      Contato
                    </Li>

                    <Li
                      activeClass="entrar"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-base entrarButton"
                      onClick={() =>
                        window.open(
                          "https://app.viachat.com.br/sign-in?redirectURL=%2Fdashboard",
                          "_blank"
                        )
                      }
                    >
                      Entrar
                    </Li>
                  </div>
                </div>
              </div>
              {/* mobile mood */}
              <div className="relative right-10 flex md:hidden">
                <button
                  onClick={() => setVisible(!visible)}
                  type="button"
                  className="bg-[#00d7b5] inline-flex items-center 
                justify-center p-2 rounded-md text-white hover:bg-[#00d7b5]
                focus: outline-none focus:ring-offset-2 focus:ring-offset-[#60a198] focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Abrir Menu</span>
                  {!visible ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns=""
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns=""
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={visible}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                ref={ref}
                className="bg-white flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Li
                  activeClass="precos"
                  to="precos"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="estiloButtonMobile"
                >
                  Quanto custa?
                </Li>

                <Li
                  activeClass="duvidas"
                  to="duvidas"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="estiloButtonMobile"
                >
                  Dúvidas
                </Li>
                <Li
                  activeClass="contato"
                  to="contato"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="estiloButtonMobile"
                >
                  Contato
                </Li>
                <Li
                  activeClass="entrar"
                  to="entrar"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer text-base entrarButton"
                  onClick={() =>
                    window.open(
                      "https://app.viachat.com.br/sign-in?redirectURL=%2Fdashboard",
                      "_blank"
                    )
                  }
                >
                  Entrar
                </Li>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};
{
  /* <header className="flex justify-between fixed bg-white w-full font-kroneOne text-sm p-2">
<div className="w-[4rem] p-2 ml-5 mt-1">
  <Image src={require("../../public/img/logo.png")} alt="logo" />
</div>

<nav className={`w-[50rem] mr-8 md:block ${visible ? '' : 'hidden'}`}>
  <ul className={`${visible ? 'flex flex-col absolute top-12 z-20 bg-white p-2 w-full' : 'flex flex-col justify-between items-center md:flex-row'}`}>
    <li>Como funciona?</li>
    <li>Quanto custa?</li>
    <li>Dúvidas</li>
    <li>Contato</li>
    <li>
      <Button name={"Entrar"} />
    </li>
  </ul>
</nav>
<div className="w-[3.5rem] p-2 ml-5 mt-1 md:hidden" onClick={() => setVisible(!visible)}>
  <Image src={require("../../public/img/menu.png")} alt="logo" />
</div>
</header> */
}
