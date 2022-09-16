import './App.css';
// import Introduction from './components/introduction'
import React, {useState, useEffect} from 'react'

function App() {

  // USE STATE HOOK
  const [pacarSaya, setPacarSaya] = useState(0)
  const [namaPacar, setNamaPacar] = useState()

  useEffect(() => {
    if(pacarSaya > 1){
      setNamaPacar('Rahasia')
    }else if(pacarSaya > 0){
      setNamaPacar('Kaela')
    }else{
      setNamaPacar()
    }
  }, [pacarSaya]);

  return (
    <div>
      <h1>Saya punya {pacarSaya} pacar</h1>
      <h3>Nama Pacar : {namaPacar}</h3>

      <button onClick={() => setPacarSaya(prev => prev+1)}>Tambah Pacar</button>
      <button onClick={() => setPacarSaya(prev => pacarSaya <= 0 ? 0 : prev-1)}>Putus</button>
      
    </div>
  );
}

export default App;
