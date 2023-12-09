import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Trucks from './Pages/Trucks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <Home />
      <Trucks /> */}
    </div>
  );
}

export default App;
