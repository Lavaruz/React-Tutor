import './App.css';
import Introduction from './components/introduction'
import {useState} from 'react'

function App() {

  const [getData, setData] = useState('')

  const buttonPress = () => {
    setData('iam pregnant')
  }

  return (
    <div>
      <h1>Hello World React Im Coming</h1>
      <Introduction name='Assami Muzaki' age={20}/>

      <button onClick={() => buttonPress()}>Click Here</button>
      <Introduction name='Diana' age={20} status={getData}/>
      
    </div>
  );
}

export default App;
