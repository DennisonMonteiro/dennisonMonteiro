import './Overview.css'
import profile from '../../assets/images/profile/profile.jpg'
import Typed from 'typed.js'
import Btn from '../../components/btn/Btn';
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
                    <Btn
                        title={ 'Github' }
                        link={ 'https://github.com/DennisonMonteiro' }
                        background={ '#2a2a2a' }
                        hover = { '#383838' }
                        icon={ <AiOutlineGithub className='icon'/> }
                    />
                    <Btn
                        title={ 'Linkedin' }
                        link={ 'https://www.linkedin.com/in/dennison-monteiro-16a21318b/' }
                        background={ '#0a66c2' }
                        hover = { '#147ee9' }
                        icon={ <AiOutlineLinkedin className='icon'/> }
                    />
                </div>
            </div>
            <div className='overview-picture'>
                <img src={ profile } alt="Creator pic" />
            </div>
        </div>
      
  )
}

export default Overview;


