import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}>
        <a href="#" style={{ color: "#fff", fontSize: "1.5rem", textDecoration: "none", fontWeight: "bold" }}>
          Cover Your Way
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ color: "#fff", backgroundColor: "transparent", border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul style={{ display: "flex", listStyle: "none", gap: "15px", margin: 0, padding: 0 }}>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Inicio</a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Acerca de</a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Servicios</a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
