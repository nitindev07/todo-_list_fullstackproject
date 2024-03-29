import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
