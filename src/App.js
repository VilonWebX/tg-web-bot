import { useEffect } from 'react';
import './App.css'; 
import { useTelegram } from './components/hooks/UseTelegram';
import Header from './components/Header/Header.jsx'

function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
     <button onClick={onToggleButton}>toggle</button>
    </div>
  )
}

export default App;
