import React, {useEffect} from "react";
import "./Staff.css";

//Import images
import user4 from "../assets/user4.avif";
import user5 from "../assets/user5.avif";
import user6 from "../assets/user6.avif";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Staff = () => {

  useEffect(() =>{

    Aos.init({duration:2000})
  }, [])

  return (
    <div className="staff container section">
      <div className="secContainer">
        <span className="secTitle">Pessoas Diferentes - Uma Missão</span>

        <div data-aos='fade-up' data-aos-duration='2000' className="staffContainer grid">
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user4} />
            </div>

            <span className="name">Nicole Charmaine</span>
            <span className="jobTitle">Creative Director</span>
            <span className="contact">+ 351 990 7758 90</span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user5} />
            </div>

            <span className="name">Daniel Sher</span>
            <span className="jobTitle">Co-Founder & CEO </span>
            <span className="contact">+ 351 990 7758 90</span>
          </div>
          
          <div  className="singleStaff">
            <div className="imgDiv">
              <img src={user6} />
            </div>

            <span className="name">Filipa Charmaine</span>
            <span className="jobTitle">CEO</span>
            <span className="contact">+ 351 990 7758 90</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
