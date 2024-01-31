import React, {useState} from "react";
import "./Navbar.css";

import {
  AiFillCloseCircle,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {

  //exibir a navbar mobile
  const [active, setActive] = useState('menuDiv')

  const showNavBar = ()=> {
    setActive('menuDiv activeNavbar')
  }

  // Deixar de exibir a navbar
  const removeNavBar = ()=> {
    setActive('menuDiv')
  }

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Travel</h3>
        </div>
        <div className={active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
              Sobre Nós
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
              Passeios
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Galeria
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Blog
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Contacto
              </a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLink">
                Paginas
              </a>
            </li>
          </ul>

          <div onClick={removeNavBar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="socialIcons flex">
          <BsFacebook className="icon" />
          <AiOutlineTwitter className="icon" />
          <AiFillYoutube className="icon" />
          <AiFillInstagram className="icon" />
        </div>
        <div onClick={showNavBar} className="toggleNavbar">
          <RiMenu2Fill className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
