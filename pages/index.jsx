import { InfoGeral } from "../components/infoGeral/infoGeral";
import  {HeroSection}  from "../components/heroSection/heroSection";
import { Funcoes } from "../components/funcoesProduto/funcoesProduto";
import { Chat } from "../components/beneficios/chat";
import { Duvidas } from "../components/duvidas/duvidas";
import { Contato } from "../components/contato/contato";
import Precos from "../components/precos/precos";
import { NewHeroSection } from "../components/heroSection/newHeroSection";





export default function Home() {
  return (
    <main
      className="flex flex-col items-center
    max-w-full"
    >

      <div id="home">
        <div id="home2"></div>
      </div>
    <NewHeroSection />
    
 
      {/* <HeroSection />

       <InfoGeral />

      <Funcoes />
    
      <Precos />
      
      <Chat />
      <Duvidas />
      <Contato />  */}
     
      
    </main>
  );
}
