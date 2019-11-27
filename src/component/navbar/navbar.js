import React from "react";
import './navbar.css';

function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                AGÊNCIA
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                NOTÍCIAS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                SERVIÇOS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                REFERÊNCIAS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                CLIENTE
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

