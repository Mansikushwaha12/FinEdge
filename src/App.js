import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import ContactUs from './component/ContactUS';

const App = () => {
  return (
    
    
    <Router>
      <NavBar />
      
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
      
    </Router>
  );
};
export default App;
