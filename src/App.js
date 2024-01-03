import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Home from "./components/user/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/user/home" element={<UserHome />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
