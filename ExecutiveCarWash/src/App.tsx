import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)} children="Hello World!"/>}
      <Button onClick={()=> setAlertVisibility(true)}>My Button</Button>

    </div>
    )

}

export default App
