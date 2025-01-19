import './App.css';
import NavBar from "./navbar.js"
import Home from "./home.js"
import Projects from "./projects.js"
import { HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
