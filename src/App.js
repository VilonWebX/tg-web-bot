import './App.css'; 
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/UseTelegram';
//import Header from './components/Header/Header.jsx'

function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      
     <button onClick={onToggleButton}>toggle</button>
    </div>
  )
}

export default App;
