import './App.css'

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
  return <div> <h3>What do you need for your trip?</h3></div>
}
function List(){
  return <div>LIST</div>
}
function Stats(){
  return <footer> You have X items on your list. You packed already packed X items</footer>
}



export default App
