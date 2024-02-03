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

export default Item
