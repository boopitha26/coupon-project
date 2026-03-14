import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Offers from "./pages/Offers";
import "./index.css";

function App() {
  return (
    <div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;