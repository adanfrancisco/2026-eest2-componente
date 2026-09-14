import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./pantallas/home/Home";
import NoEncontrada from "./pantallas/vacio/NoEncontrada";
import About from "./pantallas/about/About";

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};
