import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Admin from './Components/Pages/Admin'
import Career from './Components/Pages/Career'
import Footer from './Components/Footer/Footer.jsx';
import Register from './Components/Pages/Register.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/career' element={<Career/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
export default App;
