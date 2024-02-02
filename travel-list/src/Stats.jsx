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
export default Stats
