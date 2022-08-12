import './App.css';
import Game from './components/Game';
import Entry from './components/Entry';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Entry/>}/>
        <Route exact path="/game" element={<Game/>}/>
      </Routes>
      </BrowserRouter>  
  </>
  );
}

export default App;
