import './Navbar.css'

import { HiOutlineCode } from 'react-icons/hi'
import { AiOutlineHome, AiOutlineContacts } from 'react-icons/ai'
import { MdOutlineCastForEducation } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { GrProjects, GrContactInfo } from 'react-icons/gr'

const Navbar = () => {
  return (
      <header className='header'>
          <div className='logo'>{ < HiOutlineCode className='logo-icon' /> }</div>
          <div className="menu">
            <ul className='header-items'>
                <li className='item'>
                    <AiOutlineHome className='item-icon' />
                    <a href="/portfolio-dennison-monteiro">Home</a>
                </li>
                <li className='item'>
                    <GrContactInfo className='item-icon' />
                    <a href="#about">About</a>
                </li>
                <li className='item'>
                    <MdOutlineCastForEducation className='item-icon' />
                    <a href="#education">Education</a>
                </li>
                <li className='item'>
                    <GiSkills className='item-icon' />
                    <a href="#skills">Skills</a>
                </li>
                <li className='item'>
                    <GrProjects className='item-icon' />
                    <a href="#projects">Projects</a>
                </li>
                <li className='item'>
                    <AiOutlineContacts className='item-icon' />
                    <a href="#contact">Contact</a>
                </li>
            </ul>
          </div>
      </header>
  )
}

export default Navbar;
