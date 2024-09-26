const Title = () =>{
  const composition_title = 'text-[24px] tracking-[0.17px] text-center text-grey-900 leading-[146%]'
  const composition_description = 'font-regular text-[15px] tracking-[0.1px] leading-[167%] opacity-50'

  return(
    <>
      <article className={`title flow__title ${composition_title}`}>
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