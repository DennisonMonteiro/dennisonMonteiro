import './Contact.css'

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

const Contact = ({title}) => {
    return (
        <section id='contact' className='c-section'>
            <h2 className='c-title'>{title}</h2>
            <div className='c-container'>
                <div className="wrap-left">
                    <AiOutlineMail className='c-icon' />
                    <h3 className='c-text'>dennison.m.monteiro@gmail.com</h3>
                </div>
                <div className="wrap-right">
                    <AiOutlinePhone className='c-icon' />
                    <h3 className='c-text'>+55 21 993481327</h3>
                </div>
            </div>
        </section>
    )
  }
  
export default Contact;