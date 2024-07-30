import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea.js';
import { useState } from 'react';


function App() {
  const [mode, setmode] = useState("light")
  return (
    <>
      <Navbar text="Shikhar" mode={mode} />
      <div className="container my-3">
        <Textarea heading="Enter your text here" />
      </div>
    </>
  );
}

export default App;