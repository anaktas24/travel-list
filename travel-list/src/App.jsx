
import './Logo.jsx'
import './Form.jsx'
import './List.jsx'
import './Item.jsx'
import './Stats.jsx'
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

  function handleClearList(){
    const confirmed = window.confirm("Are ya sure yer wanna delete all items?")
    if(confirmed) setItems([])
  }


  return (
    <div className='app'>
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <List items={items} onClearList={handleClearList} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
      <Stats items={items}/>
    </div>
  )
}








export default App
