import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Reviews from './Components/Reviews/Reviews';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
