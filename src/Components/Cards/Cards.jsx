import React, { useEffect } from "react";
import "./Cards.css";

//imagens
import cardImage1 from "../assets/cardImage1.jpg";
import cardImage2 from "../assets/cardImage2.jpg";
import cardImage3 from "../assets/cardImage3.jpg";

//icons
import { AiOutlineSwapRight } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="cards">
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        className="cardContainer container grid"
      >
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage1} alt="Balon" />
          </div>
          <div className="textdiv">
            <h4 className="textDiv">Voo de balão</h4>
          </div>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage2} alt="Balon" />
          </div>
          <div className="textdiv">
            <h4 className="textDiv">Passeio na Praia</h4>
          </div>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage3} alt="Balon" />
          </div>
          <div className="textdiv">
            <h4 className="textDiv">Passeio nas Montanhas</h4>
          </div>
        </div>
      </div>

      <div className="spanText flex">
      Outros passeios <AiOutlineSwapRight className="icon" />
      </div>
    </div>
  );
};

export default Cards;
