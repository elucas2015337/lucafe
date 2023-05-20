import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const home = () => {
  const navigate = useNavigate()
  const gotoContact = () => {
    navigate('/contactenos')
  };

  return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis cursive cafe">Lucafe</h1>
      <Container className="col-lg-6 mx-auto">
        <p className="lead mb-4">
Lucafe es un lugar encantador con un ambiente acogedor y espacioso. Ofrecemos una amplia gama de deliciosos platillos y bebidas para todos los gustos. Nuestro equipo brinda una atención impecable y nuestra decoración exquisita crea un ambiente acogedor. ¡Ven a Lucafe y déjate seducir por una experiencia gastronómica inolvidable!</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <Button variant="primary" size="lg" className="px-4 me-sm-3 primary" onClick={ gotoContact }>
          Donde encontrarnos
        </Button>
          <Button variant="outline-secondary" size="lg" className="px-4">Deja tus comentarios</Button>
        </div>
      </Container>
      <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
        <Container className="px-5">
          <img src="https://media.discordapp.net/attachments/855212089295241236/1109404108999368724/1.jpg?width=1130&height=671" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
        </Container>
      </div>
    </div>
  );
}

export default home
