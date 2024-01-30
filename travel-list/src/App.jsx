import './App.css'
import {useState} from 'react'



const initialItems = [{ id:1, description: "Pass", quantity:2, packed: false}]

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
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([])

  function handleAddItems(item){
    setItems(items=>[...items, item])
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function List(){
  return (
    <div className='list'>
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
  return <footer className='stats'> You have X items on your list. You packed already packed X items</footer>
}

export default App
