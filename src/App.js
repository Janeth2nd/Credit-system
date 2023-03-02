import { Routes, Route } from "react-router-dom";
import Login from './Views/Login';
import Users from './Views/Users';
import Credit from './Views/Credit';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/credit" element={<Credit/>} />
    </Routes>
  );
}

export default App;
