import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Everyman from "./components/Gallery_Pages/Everyman";
import Pillar from "./components/Gallery_Pages/Pillar";
import Strange from "./components/Gallery_Pages/Strange";
import Greece from "./components/Gallery_Pages/Greece";
import Computer from "./components/Gallery_Pages/Computer";
import Balconies from "./components/Gallery_Pages/Balconies";
import Novella from "./components/Gallery_Pages/Novella";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Work />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/work/everyman" element={<Everyman />}></Route>
        <Route path="/work/pillar" element={<Pillar />}></Route>
        <Route path="/work/strange" element={<Strange />}></Route>
        <Route path="/work/holiday" element={<Greece />}></Route>
        <Route path="/work/computer" element={<Computer />}></Route>
        <Route path="/work/balconies" element={<Balconies />}></Route>
        <Route path="/work/novella" element={<Novella />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
