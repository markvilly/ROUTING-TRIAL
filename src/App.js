import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">#AVNLIE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
