
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"


import './App.css';
import About from './Component/Pages/About/About';
import Home from './Component/Pages/Home/Home';
import { Route,Routes } from 'react-router-dom';
import Shop from './Component/Pages/Shop/Shop';
import Contact from './Component/Pages/Contact/Contact';

function App() {
  return (
   <>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/shop'element={<Shop/>}/>
    <Route path='/contact'element={<Contact/>}/>
  </Routes>
   </>
  );
}
export default App;
