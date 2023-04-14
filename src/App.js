import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
    </div>
  );
}

export default App;


