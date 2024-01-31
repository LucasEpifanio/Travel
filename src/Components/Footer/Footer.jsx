import React from "react";
import "./Footer.css";

//import Icons
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container">
        <div className="content grid">
          <div className="row">
            <div className="spanText">CONTACTOS</div>

            <div className="contactDiv">
              <span className="flex">
                <HiPhone className="icon" />
                <span>+351 244 334 67</span>
              </span>
              <span className="flex">
                <MdEmail className="icon" />
                <span>travel@gemail.com</span>
              </span>
              <span className="flex">
                <FaLocationArrow className="icon" />
                <span>+351 244 334 67</span>
              </span>
            </div>
          </div>

          <div className="row">
            <div className="spanText">NOTÍCIAS POPULARES</div>

            <div className="singleNews">
              <span className="text">
              Seu guia pessoal para a maioria dos lugares para visitar no mundo
              </span>
              <p>Jan 04, 2023</p>
            </div>

            <div className="singleNews">
              <span className="text">
              A grande revelação do hotel mais icônico do mundo - Atlantis The Royal
              </span>
              <p>Jan 20, 2023</p>
            </div>
          </div>

          <div className="row">
            <div className="spantext">LINKS RÁPIDOS</div>
            <div className="footerLinks">
              <ul>
                <li>Sobre Nós</li>
                <li>Nosso time</li>
                <li>Galeria</li>
                <li>Blog</li>
                <li>Carreiras</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomDiv flex">
          <p>Copyright 2023 Lucas Epifanio - Todos os direitos reservados</p>
          <div className="social flex">
            <FaFacebookF className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <AiFillInstagram className="icon" />
          </div>

          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
