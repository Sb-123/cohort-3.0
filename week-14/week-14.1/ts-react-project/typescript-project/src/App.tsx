import Todo from './Todo'
import './App.css'

function App() {


  return (
    <>
      
      <Todo id={2} title="Learn TypeScript" description="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript." />
      <Todo id={3} title="Learn React" description="React is a JavaScript library for building user interfaces." />
    </>
  )
}

export default App
