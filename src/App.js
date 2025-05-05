import './App.css';
import Nav from './components/navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import FOOTER from "./components/footer";
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FOOTER />
      </Router>
    </>
  );
}

export default App;
