import './App.css'

const initialItems = [
  { id:1, description: "Pass", quantity:2, packed: false}]

function App() {

  return (
    <div>
      <Logo/>
      <Form/>
      <List/>
      <Stats/>
    </div>
  )
}

function Logo(){
  return <h1> Far Away</h1>
}
function Form(){
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({leength:20}, (_,i) => i+1).map(num=>
          <option value={num} key={num}>
            {num}
          </option>)}
      </select>
      <input type="text" placeholder="Item..."/>
      <button>Add</button>
    </form>
  )
}
function List(){
  return (
    <div>
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

function Item({item}){
  return(
    <li>
      <span style={item.packed ? { textDecoration:"line-trough"} : {}}>
        {item.quantity} {item.description}
        <button>X</button>
      </span>
    </li>
  )
}
function Stats(){
  return <footer> You have X items on your list. You packed already packed X items</footer>
}



export default App
