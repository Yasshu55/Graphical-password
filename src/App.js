
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
} from "react-router-dom"; 
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>    
    </div>
  );
}

export default App;
