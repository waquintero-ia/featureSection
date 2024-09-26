const Card = () =>{
  const composition_article = 'grid grid-row-4'
  const composition_card__container = 'bg-white-100 col-span-1 w-[82.94vw] min-h-[33.28vh] rounded-[8px] shadow-card-shadow overflow-hidden'
  const composition_card__description = 'relative h-full text-grey-900'
  const composition_title = 'text-[20px] font-semibold'
  const composition_description = 'text-[13px] tracking-[0.09px] leading-[170%] opacity-50'
  
  return(
    <>
      <article className={`flow__cards ${composition_article}`}>
        <div className={`card__container card__cyan ${composition_card__container}`}>
          <div className={`card__description ${composition_card__description}`}>
            <h2 className={`title ${composition_title}`}>
              Supervisor
            </h2>
            <p className={`description ${composition_description}`}>
              Monitors activity to identify project roadblocks
            </p>
            <picture className="absolute bottom-0 right-0">
              <img className="w-[15.2vw]" src="./images/icon-supervisor.svg" alt="Magnifying glass icon with an eye in the middle, observing." />
            </picture>
          </div>
        </div>
        <div className={`card__container card__cyan ${composition_card__container}`}>
          <div className={`card__description ${composition_card__description}`}>
            <h2 className={`title ${composition_title}`}>
              Team Builder
            </h2>
            <p className={`description ${composition_description}`}>
              Scans our talent network to create the optimal team for your project
            </p>
            <picture className="absolute block bottom-0 right-0">
              <img className="w-[15.2vw]" src="./images/icon-team-builder.svg" alt="Magnifying glass icon with an eye in the middle, observing." />
            </picture>
          </div>
        </div>
        <div className={`card__container card__cyan ${composition_card__container}`}>
          <div className={`card__description ${composition_card__description}`}>
            <h2 className={`title ${composition_title}`}>
              Karma
            </h2>
            <p className={`description ${composition_description}`}>
              Regularly evaluates our talent to ensure quality
            </p>
            <picture className="absolute bottom-0 right-0">
              <img className="w-[15.2vw]" src="./images/icon-karma.svg" alt="Magnifying glass icon with an eye in the middle, observing." />
            </picture>
          </div>
        </div>
        <div className={`card__container card__cyan ${composition_card__container}`}>
          <div className={`card__description ${composition_card__description}`}>
            <h2 className={`title ${composition_title}`}>
              Calculator
            </h2>
            <p className={`description ${composition_description}`}>
              Uses data from past projects to provide better delivery estimates
            </p>
            <picture className="absolute bottom-0 right-0">
              <img className="w-[15.2vw]" src="./images/icon-calculator.svg" alt="Magnifying glass icon with an eye in the middle, observing." />
            </picture>
          </div>
        </div>
      </article>
    </>
  )
}

export default Card