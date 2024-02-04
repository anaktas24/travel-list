import { useState } from "react"


function Accordion({data}){
  return(
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem  title={el.title} text={el.description} nnum={i} key={el.title}/>))}
    </div>
  )

}

function AccordionItem({num, title, description}){
  const [isOpen, setIsOpen] = useState(false)
  function handleToggle(){
    setIsOpen((isOpen)=> !isOpen)
  }
  return(
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen &&
        <div className="content-box">
          {description}
        </div>}
    </div>
  )
}

export default Accordion
