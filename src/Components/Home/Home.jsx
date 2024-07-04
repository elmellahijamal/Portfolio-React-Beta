import React from 'react'
import './Home.css'
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <>
        <section className='center-container'>
            <div className="aboutme">
            <h1 id="typewriter">Full Stack Developer <span>wanna be 👀</span>!</h1>
                    <p id='intro'>
                    I'm Mohamed Jamal El Mellahi, You can call me Jamal .. <br /><br />
                    Currently Student At ENSA Tetouan, but soon I'll be at the saint of your company
                    </p>
            </div>
            <div className="myimage">
            <img src="src/assets/pic.jpeg" alt="" />
            </div>
        </section>
        <div className="btn-go">
          
         <Link to="education" className="nav-link" smooth={true} duration={500}>
                           <button >Let's Gooo !</button>
                    </Link>
        </div>
    </>
  )
}

export default Home