import './App.css'
import {useState} from 'react'




function App() {

  const [items, setItems] = useState([])


  function handleAddItems(item){
    setItems(items=>[...items, item])
  }

  function handleDeleteItem(id){
    setItems((items)=> items.filter((item=>item.id!==id)))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }


  return (
    <div className='app'>
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <List items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
      <Stats items={items}/>
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
function List({items, onDeleteItem, onToggleItem}){
  const [sortBy, setSortBy] = useState('input')
  let sortedItems
  if(sortBy==='input') sortedItems =items
  if(sortBy==='description') sortedItems =items
    .slice()
    .sort((a,b) => a.description.localeCompare(b.description))
  if(sortBy==='packed') sortedItems =items
    .slice()
    .sort((a,b)=> Number(a.packed) - Number(b.packed))

  return (
    <div className='list'>
      <ul>
        {sorteditems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
      </div>
    </div>
  )
}

function Item({item, onDeleteItem, onToggleItem}){
  return(
    <li>
      <input type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id)}/>
      <span style={item.packed ? { textDecoration:"line-trough"} : {}}>
        {item.quantity} {item.description}
        <button onClick={()=> onDeleteItem(item.id)}>X</button>
      </span>
    </li>
  )
}
function Stats({items}){
  if (!items.length)
   return (
    <p className='footer'>
      <em>
        Start adding items to your list
      </em>
    </p>
   )
  const numItems = items.length
  const numPacked = items.filter(item=> item.packed).length
  const percentage = Math.round((numPacked/numitems)* 100)
  return (
    <footer className='stats'>
      <em>
        {percentage===100 ? 'You got everything packed!' :
        `You have ${numItems} items on your list.
        You packed already packed ${numPacked} (${percentage}%)items`}
      </em>
    </footer>
  )
}

export default App
