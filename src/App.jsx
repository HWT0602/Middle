import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Buy from './pages/Buy';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ProductDetail1 from './pages/ProductDetail1';
import ProductDetail2 from './pages/ProductDetail2';
import ProductDetail3 from './pages/ProductDetail3';
import ProductDetail4 from './pages/ProductDetail4';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='buy' element={<Buy />} />
        <Route path='buy/detail1' element={<ProductDetail1 />} />
        <Route path='buy/detail2' element={<ProductDetail2 />} />
        <Route path='buy/detail3' element={<ProductDetail3 />} />
        <Route path='buy/detail4' element={<ProductDetail4 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App