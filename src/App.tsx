import { useState } from 'react'
import './App.css'

type TitleProps = {
  text : string
}

const Title = (titulo : TitleProps) => {
  return <h1>{titulo.text}</h1>
}

const Title2 = ({ text} : { text : string }) => {
  return <h1>{text}</h1>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Title text='Hello World'></Title>
      <Title2 text="Hello World"></Title2>
    </div>
  )
}

export default App
