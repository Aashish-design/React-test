import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
// import Gallery from "./Pages/Gallery";
Routes;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
    </>
  );
}

export default App;
