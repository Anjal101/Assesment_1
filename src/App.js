import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './component/Add';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Add/> */}
      {/* <Home/> */}
    <Routes> 
     <Route path="/" element={<Add/>}></Route> 
     <Route path="/a" element={<Home/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
