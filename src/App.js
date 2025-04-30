
import './App.css';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Banner";
import API from "./components/testApi";
import FOOTER from "./components/footer";
import Type from "./components/Type"

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <API/>
    <Type/>
    <FOOTER/>
    </>

  );
}

export default App;
