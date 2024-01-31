import React, {useEffect}  from 'react'
import './Review.css'

//Import Images
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {

  useEffect(() =>{

    Aos.init({duration:2000})
  }, [])

  return (
    <div className='review section'>
      <div className='secContainer'>
        <span className='secTitle'>
        O que as pessoas dizem
        </span>

        <div data-aos='fade-up' data-aos-duration='2000' className='reviewContainer container grid'>

          <div className='singleReview'>
            <div className='imgDiv'>
              <img src={user1} alt='foto de perfil de uma mulher' />
            </div>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim asperiores, inventore nihil, laborum voluptas incidunt unde, debitis quidem soluta vitae facere numquam ipsum qui aut ratione! Suscipit dolore iusto ipsa.
            </p>

            <div className='name'>
              Adriana Neves
            </div>
          </div>

          <div className='singleReview'>
            <div className='imgDiv'>
              <img src={user2} alt='foto de perfil de uma mulher' />
            </div>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim asperiores, inventore nihil, laborum voluptas incidunt unde, debitis quidem soluta vitae facere numquam ipsum qui aut ratione! Suscipit dolore iusto ipsa.
            </p>

            <div className='name'>
              Livia Josline
            </div>
          </div>

          <div className='singleReview'>
            <div className='imgDiv'>
              <img src={user3} alt='foto de perfil de uma mulher' />
            </div>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim asperiores, inventore nihil, laborum voluptas incidunt unde, debitis quidem soluta vitae facere numquam ipsum qui aut ratione! Suscipit dolore iusto ipsa.
            </p>

            <div className='name'>
              Adam Smith
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review