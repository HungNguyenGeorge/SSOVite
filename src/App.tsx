import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Router from './routes';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router />
  )
}

export default App
