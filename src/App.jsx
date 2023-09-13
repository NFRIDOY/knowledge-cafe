// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header title={"Knowledge Cafe"}></Header>
      <Blogs></Blogs>
      
    </>
  )
}

export default App
