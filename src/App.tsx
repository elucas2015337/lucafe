// app.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

// Import your pages
import Home from './pages/home/home';
import ContactUs from './pages/contactUs/contactUs';
import MissionVision from './pages/missionAndVision/missionAndVision';
import OurClients from './pages/ourClients/ourClients';
import OurProducts from './pages/ourProducts/ourProducts';
import OurProviders from './pages/ourProviders/ourProdivers';
import WhoAreWe from './pages/whoAreWe/whoAreWe';

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/quienes-somos">Quienes Somos?</Nav.Link>
        <Nav.Link as={Link} to="/mision-y-vision">Misión y Visión</Nav.Link>
        <Nav.Link as={Link} to="/nuestros-productos">Nuestros Productos</Nav.Link>
        <Nav.Link as={Link} to="/nuestros-proveedores">Nuestros Proveedores</Nav.Link>
        <Nav.Link as={Link} to="/nuestros-clientes">Nuestros Clientes</Nav.Link>
        <Nav.Link as={Link} to="/contactenos">Contáctenos</Nav.Link>
      </Nav>
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
  </Router>
);

export default App;
