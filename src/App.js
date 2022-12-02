import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/navbar';
import Bands from './components/Bands/bands';
import Detail from './components/Detail/detail';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bands />} />
          <Route path="/:bandId" element={<Detail></Detail>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
