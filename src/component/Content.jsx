import PropTypes from 'prop-types';

const Content = ({title, description, image, alt, color, position}) => {
  const composition_card__container = 'bg-white-100 col-span-1 w-[82.94vw] min-h-[33.28vh] rounded-[8px] shadow-card-shadow overflow-hidden'
  const composition_card__description = 'relative h-full text-grey-900'
  const composition_title = 'text-[20px] font-semibold'
  const composition_description = 'text-[13px] tracking-[0.09px] leading-[170%] opacity-50'
  
  return(
    <>
      <div className={`card__container card__${color} ${composition_card__container} ${position}`}>
        <div className={`card__description ${composition_card__description}`}>
          <h2 className={`title ${composition_title}`}>
            {title}
          </h2>
          <p className={`description ${composition_description}`}>
            {description}
          </p>
          <picture className="absolute bottom-0 right-0">
            <img className="w-[15.2vw]" src={image} alt={alt} />
          </picture>
        </div>
      </div>
    </>
  )
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Content