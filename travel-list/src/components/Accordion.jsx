import { useState } from "react"


function Accordion({data}){
  const [curOpen, setCurOpen] = useState(null)
  return(
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen = {curOpen}
          onOpen = {setCurOpen}
          title={el.title}
          description={el.description}
          num={i}
          key={el.title}/>))}
    </div>
  )

}

function AccordionItem({num, title, description, curOpen, onOpen}){
  const isOpen = num ===curOpen

  function handleToggle(){
    onOpen(num)
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
