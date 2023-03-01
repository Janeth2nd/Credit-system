import { Routes, Route } from "react-router-dom";
import Login from './Views/Login';
import Users from './Views/Users';
import Credit from './Views/Credit';
import './App.css';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/credit" element={<Credit/>} />
    </Routes>
    // <div>
    //   <Credit/>
    // </div>
  );
}

export default App;
