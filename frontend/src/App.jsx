import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {console.log(error)})
  })

  return (
    <>
      <div>JOKES : {jokes.length}</div>

      {
        jokes.map((joke) => (
          <div key = {joke.id}>
            <p> {joke.title} </p>
            <p> {joke.content} </p>
          </div>
        ))
      }
    </>
  )
}

export default App
