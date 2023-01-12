import Info from "./components/Info";
import ReactDOM from 'react-dom/client'
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = (
  <div className="main--outer">
    <div className="main--inner">
      <Info/>
      <div className="details">
        <About/>
        <Interests/>
      </div>
      <Footer/>
    </div>
  </div>
)
root.render(element);
