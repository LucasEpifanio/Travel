import React, {useEffect} from 'react'
import './Tour.css'

//Imported Images
import tourImage1 from '.././assets/tourImage1'
import tourImage2 from '.././assets/tourImage2.jpg'
//Import Icons
import { AiFillStar } from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Tour = () => {

  useEffect(() =>{

    Aos.init({duration:2000})
  }, [])

  return (
    <div className='tours container section'>
      <div className='secContainer'>
        <span className='secTitle'>
        Passeios quentes
        </span>

        <div className='tourContainer'>
          <div data-aos='fade-up' data-aos-duration='2500' className='singleTour grid'>
            <div data-aos='fade-up' data-aos-duration='2200' className='imgDiv'>
              <img src={tourImage1}/>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000' className='tourInfo'>
              <span className="tourTitle">
                Canada, Colúmbia Britânica
              </span>
              <div className='stars_review flex'>
                <div className='stars'>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>

                <small className='custReview'>
                2 Avaliações de clientes
                </small>
              </div>

              <p>
              O Monte Robson é a montanha mais proeminente da Cordilheira Rochosa da América do Norte; é também o ponto mais alto das Montanhas Rochosas canadenses. A montanha está localizada inteiramente dentro do Mount Robson Provincial Park, na Colúmbia Britânica, e faz parte da Rainbow Range.
              </p>
              <button className='btn'>Compre este passeio</button>
            </div>

            <span className="price">
            €820
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className='singleTour grid'>
            <div data-aos='fade-up' data-aos-duration='2200' className='imgDiv'>
              <img src={tourImage2}/>
            </div>
            <div data-aos='fade-up' data-aos-duration='2000' className='tourInfo'>
              <span className="tourTitle">
                Espanha, Barcelona
              </span>
              <div className='stars_review flex'>
                <div className='stars'>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>

                <small className='custReview'>
                6 Avaliações de clientes
                </small>
              </div>

              <p>
              Barcelona é um dos principais centros turísticos, econômicos, comerciais e culturais do mundo, sendo que sua influência no comércio, educação, entretenimento, mídia, moda, ciência e artes contribuem para o seu estatuto como uma das principais cidades mundiais.
              </p>
              <button className='btn'>Compre este passeio</button>
            </div>

            <span className="price">
            €90
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Tour