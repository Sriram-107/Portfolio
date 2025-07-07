import Header from "./components/Header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router";
import Project from "./pages/Project/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
