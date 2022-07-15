import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavBar } from "../components/navBar/navBar";
import Footer from "../components/footer/footer";
import { FloatingButton } from "../components/floatingButton/floatingButton";
import { AppContext } from "../contexts/AppContext/index";
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    
    <>
      <Head>
        <title>ViaChat</title>
      </Head>
     
      
      <NavBar />
    
      <Component {...pageProps} />

      <FloatingButton />
      <Footer />
  </>
   
  );
}

export default MyApp;
