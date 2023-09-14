// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header title={"Knowledge Cafe"}></Header>
      <div className='flex justify-between mx-28 py-8'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>

      </div>

    </>
  )
}

export default App
