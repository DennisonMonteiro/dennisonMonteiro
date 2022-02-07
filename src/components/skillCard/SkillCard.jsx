import './SkillCard.css'

const SkillCard = ({title, img}) => {
    return (
        <div className='card'>
            <div className='img-wrapper'>
                <img src={img} alt="stack skill" />
            </div>
            <div className='card-title'>
                {title}
            </div>
        </div>
    )
  }
  
  export default SkillCard;