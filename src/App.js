import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import Doctors from './components/Doctors';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} >


          </Route >

          <Route path="/doctors" element={<Doctors />} >
            

          </Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
