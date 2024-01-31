import React, {useEffect} from 'react'
import './Discount.css'

//Import Video
import video from '../assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Discount = () => {

  useEffect(() =>{

    Aos.init({duration:2000})
  }, [])

  return (
    <div className='discount section'>
      <div className='secContainer'>
        <video src={video} autoPlay loop muted typeof='mp4'></video>
        <div className='textDiv'>
          <span data-aos='fade-up' data-aos-duration='2000' className='title'>
          Inscreva-se com 35% de Desconto
          </span>
          <p data-aos='fade-up' data-aos-duration='2000'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda dolor id tempore necessitatibus consequatur enim laboriosam temporibus dignissimos voluptatibus iusto aut sunt quaerat.</p>
          <div data-aos='fade-up' data-aos-duration='2000' className='input_btn flex'>
            <input type='text' placeholder='Insira seu e-mail' />
            <button className='btn'>Inscreva-se</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount