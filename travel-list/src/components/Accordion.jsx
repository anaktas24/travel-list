

function Accordion({data}){
  return(
    <div className="accordion">
      {data.map((el, i) =>
        <AccordionItem  title={el.title} text={el.text} nnum={i}/>)}
    </div>
  )

}

function AccordionItem({num, title, text}){
  return(
    <div className="item">
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  )

}

export default Accordion
