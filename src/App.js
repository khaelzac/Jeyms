
import './App.css';
import Nav from './components/navbar/Nav';
// import './components/navbar/Nav.css';
// import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "./components/Banner";
// import API from "./components/testApi";
import FOOTER from "./components/footer";
import Home from './components/home/Home';

function App() {
  return (
    <>
    
    {/* <Navbar/> */}
    <Nav/>
    <Home/>
    <FOOTER/>
    </>

  );
}

export default App;
