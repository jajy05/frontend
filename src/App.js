
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Vendor from './components/Pages/Vendor';
import Home from './components/Pages/Home';
import Service from './components/Pages/Service';
import Sector from './components/Pages/Sector';
import Project from './components/Pages/Project';
import Aboutus from './components/Pages/Aboutus';
import Navbar from './components/Navbar';
import News from './components/Pages/News';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <News/>
     <Routes>
        <Route path='/' element={ <Home/>}/>
       
        <Route path='/Aboutus' element={ <Aboutus/>}/>
        <Route path='/Service' element={ <Service/>}/>
        <Route path='/Sector' element={ <Sector/>}/>
        <Route path='/Project' element={ <Project/>}/>
        <Route path='/Vendor' element={ <Vendor/>}/>
       
        
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
