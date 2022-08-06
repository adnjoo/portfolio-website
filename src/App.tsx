import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import "./index.css";

function App() {
  const [navLocation, setNavLocation] = useState("");
  return (
    <>
      <Navbar navLocation={navLocation} setNavLocation={setNavLocation} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
