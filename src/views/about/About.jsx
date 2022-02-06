import Btn from '../../components/btn/Btn';
import pdf from '../../assets/cv/curriculo_english.pdf'
import { AiOutlineFilePdf } from 'react-icons/ai'
import './About.css'

const About = ({title}) => {
    return (
        <section id='about' className='a-section'>
            <h2 className='a-title'>{title}</h2>
            <div className='a-container'>
                <p>My name is Dennison Moura Monteiro and i'm a Full-Stack Developer.</p>
                <p>I'm a Computer Science student at the Universidade Federal do Rio de Janeiro - UFRJ and I am currently unemployed.</p>
                <p>Since I was a child, I have been passionate about technology. I grew up playing video games and 
                    as a teenager I had my first contact with a computer. Since then my curiosity for him has only 
                    increased, which led me to the computer science course.</p>
                <p>My professional goal is to become a competent developer and know the world through my work.</p>
                <p>I speak Portuguese natively, my English is intermediate and I know the basics of Spanish.</p>
            </div>
            <Btn
                title={ 'My CV' }
                link={ pdf }
                background={ '#4f98a7' }
                hover = { '#74BDCB' }
                icon={ <AiOutlineFilePdf className='icon'/> }
            />
        </section>
    )
  }
  
  export default About;