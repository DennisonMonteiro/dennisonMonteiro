import SkillCard from '../../components/skillCard/SkillCard';
import './Skills.css'

import git from '../../assets/images/skills/git.png'
import html from '../../assets/images/skills/html.png'
import css from '../../assets/images/skills/css.png'
import js from '../../assets/images/skills/js.png'
import react from '../../assets/images/skills/react.png'
import cs from '../../assets/images/skills/cs.png'
import aspnet from '../../assets/images/skills/aspnet.png'
import sql from '../../assets/images/skills/sql.png'
import ef from '../../assets/images/skills/ef.png'

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