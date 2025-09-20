import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Programming from "./Programming";
import Spreadsheet from "./Spreadsheet";

export default function Index() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/spreadsheet" element={<Spreadsheet />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}