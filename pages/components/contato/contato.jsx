import Lottie from "react-lottie";
import { TitleSection } from "../infoGeral/titleSection";
import { useWindowSize } from "../heroSection/hook";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../../../public/img/lotties/work-team.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const options = {
  headers: {'Content-Type': 'application/json'}
}

export const Contato = () => {
  const [widthSvg, setWidthSvg] = useState(0);
  const [heightSvg, setHeightSvg] = useState(0);
  const [disponible, setDisponible] = useState(true);
  const size = useWindowSize();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");

  useEffect(() => {
    console.log("Build Contato");
    setWidthSvg(size.width <= 760 ? 240 : 480);
    setHeightSvg(size.width <= 760 ? 180 : 360);
  }, [size]);

  const handleSubmit = (e) => {
    let objContact = {
      nome: nome,
      email: email,
      assunto: assunto,
    };
    axios
      .post("http://localhost:3000/api/email", objContact, options)
      .then(() => {
        Swal.fire(
          "Enviado",
          "Em breve estaremos entrando em contato com você!",
          "success"
        );
        setDisponible(false);
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Aconteceu algo de errado!",
          footer: "Atualize a página e tente novamente!",
        });
        setDisponible(true);
      });
    e.preventDefault();
  };
  return (
    <div className="bg-[#9CD9F3] max-h-[70rem] w-full" id="contato">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,256L30,218.7C60,181,120,107,180,74.7C240,43,300,53,360,69.3C420,85,480,107,540,122.7C600,139,660,149,720,138.7C780,128,840,96,900,112C960,128,1020,192,1080,229.3C1140,267,1200,277,1260,272C1320,267,1380,245,1410,234.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <section className="w-full flex justify-center">
        <div
          className="w-10/12 md:w-[60rem] md:h-[30rem] flex items-center
         bg-white shadow-lg rounded-2xl "
        >
          <div className="ml-5 flex-col">
            <TitleSection
              attributes={
                "absolute md:relative top-[355.5rem] md:top-auto left-2"
              }
              title={"Contato"}
              attTitle={"md:text-6xl ml-12 text-[1.5rem]"}
            />
            {widthSvg == 240 ? (
              <div></div>
            ) : (
              <div>
                <Lottie
                  options={defaultOptions}
                  width={widthSvg}
                  height={heightSvg}
                />
              </div>
            )}
          </div>
          <div>
            <form
              className="w-10/12 md:w-9/12 ml-5 md:ml-auto mr-auto p-5 md:p-auto"
              onSubmit={handleSubmit}
            >
              <input
                name="name"
                type="text"
                className="feedback-input "
                placeholder="Nome"
                required={true}
                disabled={!disponible}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                name="email"
                type="email"
                className="feedback-input"
                required={true}
                placeholder="E-mail"
                disabled={!disponible}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="text"
                className="feedback-input"
                placeholder="Assunto"
                required={true}
                disabled={!disponible}
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              ></textarea>
              <input
                type="submit"
                disabled={!disponible}
                value={`${disponible ? "ENVIAR" : "ENVIADO"}`}
                onSubmit={handleSubmit}
              />
            </form>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fillOpacity="1"
          d="M0,256L30,218.7C60,181,120,107,180,74.7C240,43,300,53,360,69.3C420,85,480,107,540,122.7C600,139,660,149,720,138.7C780,128,840,96,900,112C960,128,1020,192,1080,229.3C1140,267,1200,277,1260,272C1320,267,1380,245,1410,234.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
