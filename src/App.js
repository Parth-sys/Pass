import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import {
  
  Routes,
  Route,
  
} from "react-router-dom";
import Forgetpass from './Forgetpass';
import Reset from './Reset';



//<Link  to={"/Forgetpass"} >forgot Password</Link>  
 
function App() {

  return (
    
    <div className="App">
    
       <div>       
          <img src={logo} className="App-logo" alt="logo" />
       
   </div>

 <Routes>
   <Route path="/"  element={<Login/>} />
   <Route path="/Forgetpass" element={<Forgetpass/>}/>
   <Route path="/Reset" element={<Reset/>}/>
   

 </Routes>





    </div>
   
  );
}

export default App;
