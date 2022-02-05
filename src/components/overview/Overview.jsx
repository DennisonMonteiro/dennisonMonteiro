import './Overview.css'
import profile from '../../assets/images/profile.jpg'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Overview = () => {
    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Full-Stack Developer.", "ASP.NET Core Developer.", "React.Js Developer."],
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 50,
          backDelay: 800,
          loop: true,
        });
    
        return () => {
          typed.destroy();
        };
    }, []);

    return (
        <div className='overview'>
            <div className='overview-wrapper'>
                <h2 className='overview-intro'>Hello, My name is</h2>
                <h1 className='overview-name'>Dennison Monteiro</h1>
                <h2 className='overview-intro'>and i'm a <span ref={el}></span></h2>
                <p className='overview-social'>Find me on social media:</p>
                <div className='overview-btns'>
                    <a href='https://github.com/DennisonMonteiro' target= '_blank' rel='noreferrer' className='github'>
                        <AiOutlineGithub className='icon' />
                        Github
                    </a>
                    <a href='https://www.linkedin.com/in/dennison-monteiro-16a21318b/' target= '_blank' rel='noreferrer' className='linkedin'>
                        <AiOutlineLinkedin className='icon' />
                        Linkedin
                    </a>
                </div>
            </div>
            <div className='overview-picture'>
                <img src={ profile } alt="Creator pic" />
            </div>
        </div>
      
  )
}

export default Overview;


