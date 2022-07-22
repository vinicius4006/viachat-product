import { InfoGeral } from "../components/infoGeral/infoGeral";
import  {HeroSection}  from "../components/heroSection/heroSection";
import { Funcoes } from "../components/funcoesProduto/funcoesProduto";
import { Chat } from "../components/beneficios/chat";
import { Duvidas } from "../components/duvidas/duvidas";
import { Contato } from "../components/contato/contato";
import Precos from "../components/precos/precos";
import { NewHeroSection } from "../components/heroSection/newHeroSection";
import { ChatBot } from "../components/chatbot/chatbot";





export default function Home() {
  return (
    <main
      className="flex flex-col items-center bg-gradient-to-bl from-green-500 to-[#2491c0] 
    max-w-full"
    >
      <div id="home">
        <div id="home2"></div>
      </div>
    <NewHeroSection />
     <InfoGeral />
    <ChatBot />
     <Chat />
     <Precos />
     <Duvidas />
      <Contato />
      {/* <HeroSection />

      

       <Funcoes />
    
      
      
     
     
        */}
     
      
    </main>
  );
}
