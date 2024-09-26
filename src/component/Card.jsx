import card from '../data/card.json'
import Content from './Content'

const Card = () =>{
  const composition_article = 'grid grid-row-4'
  
  return(
    <>
      <article className={`flow__cards ${composition_article}`}>
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
            />
          ))
        }
      </article>
    </>
  )
}

export default Card