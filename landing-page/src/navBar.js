import React from 'react'

 function Bar(){
    return (
      <>
        <nav className="navbar  navbar-dark bg-dark navbar-expand-md fixed-top">
          <div className="container">
            <a href="!#"  className="navbar-brand">
              <strong>Start Bootstrap</strong>
            </a>

            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#menu"
              aria-controls="menu"
              aria-expanded="false"
              aria-label="Desplegar menú de navegación"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="!#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}
export default Bar


