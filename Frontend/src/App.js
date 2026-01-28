import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listing from './pages/Listing';
import Product from './pages/Product';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/listing' element={<Listing />}></Route>
        <Route path='/product' element={<Product />}></Route>
      
      </Routes>
      </Router>
    </>
  );
}

export default App;
