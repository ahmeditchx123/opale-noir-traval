import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App =() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);


  const getResponse = async() => {
    try {
      const response = await fetch('http://localhost:8800/api/v1/users');
      const data = await response.json();
      setMessage(data.message);
      setLoading(false);
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  
  
  useEffect(() => {
    getResponse();
  }, [])

  return (
    <div className="App">
     { loading ? (
      <p> Loading ...</p>
     ) : (
      <div>
        Message is : {message}
      </div>
     )}
    </div>
  )
}

export default App
