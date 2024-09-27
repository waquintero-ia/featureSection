import card from '../data/card.json'
import Content from './Content'

const Card = () =>{
  const composition_article = 'grid'
  const composition_article_xl = 'sm:w-[77.08vw]'

  return(
    <>
      <article className={`card flow__cards ${composition_article} ${composition_article_xl}`} >
        {
          card.map(card => (
            <Content 
              key={card.title} 
              title={card.title}
              description={card.description}
              image={card.image}
              alt={card.alt}
              color={card.color}
              position={card.position}
              id={card.id}
              dataType={card.dataType}
            />
          ))
        }
      </article>
    </>
  )
}

export default Card