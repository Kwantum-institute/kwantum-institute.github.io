import { useState } from 'react'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="ml-10">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App;
