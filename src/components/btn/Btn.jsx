import { useState } from 'react'
import './Btn.css'

const Btn = ({title, link, background, hover, icon}) => {
    const [bg, setBg] = useState(background)

    const styles = {
        background: bg
    }

    return (
        <div className='wrapper'>
            <a className='btn'
            href={ link }
            target= '_blank'
            rel='noreferrer'
            style={ styles }
            onMouseEnter={() => setBg(hover)}
            onMouseLeave={() => setBg(background)}
            >
                { icon }
                { title }
            </a>
        </div>
    )
  }
  
  export default Btn;