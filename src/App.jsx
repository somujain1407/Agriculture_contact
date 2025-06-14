import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Contact } from './assets/components/contact/Contact'
// import { Contact } from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Contact/> */}
      <Contact/>
    </>
  )
}

export default App
