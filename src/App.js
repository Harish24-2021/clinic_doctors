import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import DoctorsList from './components/DoctorsList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Slots from './components/Slots'
import { useHistory } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} >


          </Route >

          <Route path="/doctors" element={<DoctorsList />} >
            

          </Route>
          <Route path="/bookappointment" element={<Slots />} >
            

            </Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
