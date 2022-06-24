import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Form from './components/form';
import Usecontext from './Usecontext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Usecontext/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
