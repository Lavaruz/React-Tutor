import './App.css';
import Introduction from './components/introduction'
import {useState} from 'react'

function App() {

  const [pacarSaya, setPacarSaya] = useState(1)

  return (
    <div>
      <h1>Saya punya {pacarSaya} pacar</h1>

      <button onClick={() => setPacarSaya(prev => prev+1)}>Tambah Pacar</button>
      <button onClick={() => setPacarSaya(prev => pacarSaya <= 0 ? 0 : prev-1)}>Putus</button>
      
    </div>
  );
}

export default App;
