import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea.js';


function App() {
  return (
   <>
  <Navbar text= "Shikhar"/>
  <div className="container my-3">
  <Textarea heading= "Enter your text here"/>
  </div>
</>
  );
}

export default App;