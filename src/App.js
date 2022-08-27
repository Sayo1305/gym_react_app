import Navbar from "./Components/Navbar";
import {Route , Routes , Redirect  } from 'react-router-dom';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
function App() {
  return (
    <div className="bg-black w-full h-auto text-white font-bold">
      <Navbar/>
      {/* Main */}
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route exact path="/Home" element = {<Home/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/Contact" element ={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
