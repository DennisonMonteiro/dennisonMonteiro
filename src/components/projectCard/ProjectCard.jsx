import './ProjectCard.css'

import Btn from '../../components/btn/Btn';
import { AiOutlineGithub, AiOutlineChrome } from 'react-icons/ai'

const ProjectCard = ({ projectsObject }) => {
    return (
        <>
            { projectsObject.map((project) => {
                return (
                <div key={project.id} className='p-card'>
                    <div className='p-wrapper'>
                        <img src={project.img} alt="project" />
                    </div>
                    <div className='p-card-title'>
                        {project.title}
                    </div>
                    <div className='p-card-description'>
                        <p>
                            { project.description }
                        </p>
                    </div>
                    <div className='p-card-technologies' >
                        <div className='p-card-technologies-title'>
                            Technologies: 
                        </div>
                        { project.technologies.map((el) => {
                            return <div key={el} className='p-card-technologies-badge'>{el.toUpperCase()}</div>
                        }) }
                    </div>
                    <div className='p-buttons'>
                        <Btn
                            title={ 'Github' }
                            link={ 'https://github.com/DennisonMonteiro/dennisonMonteiro' }
                            background={ '#2a2a2a' }
                            hover = { '#383838' }
                            icon={ <AiOutlineGithub className='icon'/> }
                        />
                        {/* <Btn
                            title={ 'Site' }
                            link={ 'https://github.com/DennisonMonteiro' }
                            background={ '#165320' }
                            hover = { '#21792f' }
                            icon={ <AiOutlineChrome className='icon'/> }
                        /> */}
                    </div>
                </div>)
            }) }
        </>
    )
  }
  
  export default ProjectCard;