import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './missionAndVision.css'

const missionAndVision = () => {
  return (
    <div 
      className="hero-section" 
    >
      <Container>
      <h1 className="cursive" style={{ fontSize: '4em', textAlign: 'center', paddingBottom: '50px' }}>Lucafé</h1>
        <Row>
          <Col md={6}>
            <div className="hero-content">
              <h1 className='cursive'>Nuestra Visión</h1>
              <p>
              Nuestra visión es convertirnos en un referente en el mundo del café, reconocidos por nuestra calidad, innovación y pasión. Nos esforzamos por expandir nuestra oferta de productos, explorando nuevas técnicas de preparación y colaborando con productores locales y sostenibles. Queremos ser un espacio de inspiración y conexión, donde los amantes del café puedan explorar diferentes sabores y experiencias. Buscamos ser reconocidos como líderes en excelencia en el servicio al cliente, superando las expectativas y creando relaciones duraderas. Nuestra visión es seguir creciendo y evolucionando, siempre comprometidos con la excelencia y la satisfacción de nuestros clientes.              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-content">
              <h1 className='cursive'>Nuestra Misión</h1>
              <p>
              En nuestro café, nos comprometemos a brindar a nuestros clientes una experiencia excepcional basada en la pasión por el café de calidad y el servicio excepcional. Nuestra misión es despertar los sentidos y crear momentos memorables al ofrecer una amplia variedad de bebidas y platillos deliciosos, preparados con ingredientes frescos y cuidadosamente seleccionados. Nos esforzamos por crear un ambiente acogedor y acogedor donde las personas puedan disfrutar de momentos de relajación y conexión. Nuestro objetivo es convertirnos en el lugar preferido de la comunidad, donde cada visita sea un encuentro inolvidable con el café y la buena compañía.              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default missionAndVision
