const Title = () =>{
  const composition_title = 'text-size-h1 tracking-[0.17px] text-center text-grey-900 leading-[146%]'
  const composition_description = 'font-regular text-[15px] tracking-[0.1px] leading-[167%] opacity-50'
  const composition_title_xl = 'sm:w-[37.5vw]'

  return(
    <>
      <article className={`title flow__title ${composition_title} ${composition_title_xl}`}>
        <h1 className='font-extralight'>
          Reliable, efficient delivery <br/>
          <span className="font-semibold">Powered by Technology</span>
        </h1>
        <p className={`description ${composition_description}`} >
          Our Artificial Intelligence powered tools use millions of project data points 
          to ensure that your project is successful
        </p>
      </article>
    </>
  )
}

export default Title