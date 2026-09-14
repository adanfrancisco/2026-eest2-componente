import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import "./css/aap.css";

import Home from "./pantallas/home/Home";
import NoEncontrada from "./pantallas/vacio/NoEncontrada";
import About from "./pantallas/about/About";

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};
