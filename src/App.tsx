import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import your pages
import Home from './pages/home/home';
import ContactUs from './pages/contactUs/contactUs';
import MissionVision from './pages/missionAndVision/missionAndVision';
import OurClients from './pages/ourClients/ourClients';
import OurProducts from './pages/ourProducts/ourProducts';
import OurProviders from './pages/ourProviders/ourProdivers';
import WhoAreWe from './pages/whoAreWe/whoAreWe';

import './App.css';

const App = () => (
  <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar className="navbar navbar-dark" expand="lg">
          <Navbar.Brand className="cursive" as={Link} to="/">Lucafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/quienes-somos">Quienes Somos?</Nav.Link>
              <Nav.Link as={Link} to="/mision-y-vision">Misión y Visión</Nav.Link>
              <Nav.Link as={Link} to="/nuestros-productos">Nuestros Productos</Nav.Link>
              <Nav.Link as={Link} to="/nuestros-proveedores">Nuestros Proveedores</Nav.Link>
              <Nav.Link as={Link} to="/nuestros-clientes">Nuestros Clientes</Nav.Link>
              <Nav.Link as={Link} to="/contactenos">Contáctenos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/quienes-somos" element={<WhoAreWe />} />
          <Route path="/mision-y-vision" element={<MissionVision />} />
          <Route path="/nuestros-productos" element={<OurProducts />} />
          <Route path="/nuestros-proveedores" element={<OurProviders />} />
          <Route path="/nuestros-clientes" element={<OurClients />} />
          <Route path="/contactenos" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <footer className="coffee d-flex justify-content-between align-items-center py-3 mt-auto">
          <div className="cursive">Conocereis la verdad y la verdad os hará libres</div>
          <Nav className="list-unstyled d-flex">
            <Nav.Item className="ms-3">
              <Nav.Link className="text-white" href="https://www.facebook.com/u.marianogalvez/?locale=es_LA">
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="ms-3">
              <Nav.Link className="text-white" href="https://www.instagram.com/marianogalvez/?hl=es">
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="ms-3">
              <Nav.Link className="text-white" href="https://twitter.com/marianogalvez?lang=es">
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </footer>
      </div>
    </Router>
)

export default App;
