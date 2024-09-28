import PropTypes from 'prop-types';

const Content = ({title, description, image, alt, color, position, id, dataType}) => {
  const composition_card__container = 'flex flex-col justify-between bg-white-100 w-[82.94vw] min-h-[33.28vh] rounded-[8px] shadow-card-shadow overflow-hidden'
  const composition_card_container_sm = 'sm:w-[24.30vw] sm:min-h-[17.36vw]'
  const composition_card__description = 'h-full text-grey-900'
  const composition_title = 'text-20 font-semibold'
  const composition_description = 'text-13 tracking-[0.09px] leading-[170%] opacity-50'
  const composition_image_container = 'flex justify-end items-end'
  const composition_image = 'w-[57px]'

  return(
    <>
      <div className={`card__container flow__card__container card__${color} ${composition_card__container} ${position} ${composition_card_container_sm} `} id={id} data-type={dataType}>
        <div className={`card__description${composition_card__description}`}>
          <h2 className={`title ${composition_title}`}>
              {title}
          </h2>
          <p className={`description ${composition_description}`}>
            {description}
          </p>
        </div>
        <div className={`image__container ${composition_image_container}`}>
          <picture>
            <img className={`image ${composition_image}`} src={image} alt={alt} loading='lazy' decoding='async'/>
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
  id: PropTypes.string.isRequired,
  dataType: PropTypes.string.isRequired,
};

export default Content