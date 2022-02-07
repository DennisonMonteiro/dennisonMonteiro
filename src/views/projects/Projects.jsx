import ProjectCard from '../../components/projectCard/ProjectCard';
import './Projects.css'

import portfolio from '../../assets/images/projects/portfolio.gif'

const Projects = ({title}) => {

    const projects = [
        {
            id: 1,
            title: 'Portfolio',
            description: 'My portfolio for professional purposes. Its purpose is to expose my current professional status, in addition to the projects carried out over the years.',
            img: portfolio,
            technologies: ['reactjs', 'html', 'css']
        }
    ]

    return (
        <section id='projects' className='p-section'>
            <h2 className='p-title'>{title}</h2>
            <div className='p-container'>
                <div className="p-grid">
                    <ProjectCard projectsObject={ projects } />
                </div>
            </div>
        </section>
    )
  }
  
export default Projects;