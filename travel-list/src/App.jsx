import './App.css'
import {useState} from 'react'



const initialItems = [{ id:1, description: "Pass", quantity:2, packed: false}]

function App() {

  const [items, setItems] = useState([])


  function handleAddItems(item){
    setItems(items=>[...items, item])
  }

  function handleDeleteItem(id){
    setItems((items)=> items.filter((item=>item.id!==id)))
  }


  return (
    <div className='app'>
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <List items={items} onDeleteItem={handleDeleteItem}/>
      <Stats/>
    </div>
  )
}

function Logo(){
  return <h1> Far Away</h1>
}


function Form({onAddItems}){
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

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
function List({items, onDeleteItem}){
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

function Item({item, onDeleteItem}){
  return(
    <li>
      <span style={item.packed ? { textDecoration:"line-trough"} : {}}>
        {item.quantity} {item.description}
        <button onClick={()=> onDeleteItem(item.id)}>X</button>
      </span>
    </li>
  )
}
function Stats(){
  return <footer className='stats'> You have X items on your list. You packed already packed X items</footer>
}

export default App
