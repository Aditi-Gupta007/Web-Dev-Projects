import { useState } from 'react'

import './App.css'
import { BlogHome } from './Components/Blog/BlogHome'
import { Slide } from './Components/Slider/Slide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>BlogHome</h1>
      <BlogHome/>
      
    </>
  )
}

export default App
