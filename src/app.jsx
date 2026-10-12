import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Login } from "./login/login";
import { Play } from "./play/play";
import { Scores } from "./scores/scores";
import { About } from "./about/about";
import { NotFound } from "./notfound/notfound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <NavLink
              className="navbar-brand text-light text-decoration-none"
              to="/"
              aria-label="Simon home"
            >
              Simon<sup>&reg;</sup>
            </NavLink>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/play">
                  Play
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/scores">
                  Scores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/play" element={<Play />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Bjorn Gray</span>
            <a
              className="text-reset"
              href="https://github.com/graymustang/simon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
