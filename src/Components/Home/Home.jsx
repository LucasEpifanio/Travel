import React, {useEffect} from "react";
import './Home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() =>{

    Aos.init({duration:2000})
  }, [])

  return (
    <div className="home">

      <div className="homeText">
        <span data-aos='fade-up' data-aos-duration='2000' className="spanText">EQUIPA DE ESPECIALISTAS EM VIAGENS </span>

        <div data-aos='fade-up' data-aos-duration='4000' className="homeTitle">
          Uma <strong>Experiência Unica</strong>
        </div>
        <div className="btn">Entrar em contato</div>
      </div>

    </div>
  );
};

export default Home;
