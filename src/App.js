import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js';
import CardComponent from './Component/CardComponent/CardComponent';
import {Routes, Route} from 'react-router-dom';
import Description from './Component/Description/Description';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/description" element={<Description/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
