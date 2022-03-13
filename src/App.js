// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/' element={<LoginPage/>}></Route>
          <Route exact path='/homepage' element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
