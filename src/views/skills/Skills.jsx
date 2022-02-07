import SkillCard from '../../components/skillCard/SkillCard';
import './Skills.css'

import git from '../../assets/images/git.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import js from '../../assets/images/js.png'
import react from '../../assets/images/react.png'
import cs from '../../assets/images/cs.png'
import aspnet from '../../assets/images/aspnet.png'
import sql from '../../assets/images/sql.png'
import ef from '../../assets/images/ef.png'

const Skills = ({title}) => {
    return (
        <section id='skills' className='s-section'>
            <h2 className='s-title'>{title}</h2>
            <div className='s-container'>
                <div className='grid'>
                    <SkillCard title={'Git'} img={git}/>
                    <SkillCard title={'Html'} img={html}/>
                    <SkillCard title={'Css'} img={css}/>
                    <SkillCard title={'Js'} img={js}/>
                    <SkillCard title={'ReactJs'} img={react}/>
                    <SkillCard title={'C#'} img={cs}/>
                    <SkillCard title={'ASP.NET'} img={aspnet}/>
                    <SkillCard title={'SQL Server'} img={sql}/>
                    <SkillCard title={'Entity Framework'} img={ef}/>
                </div>
            </div>
        </section>
    )
  }
  
export default Skills;