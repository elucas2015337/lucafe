import React from 'react'
import { Button, Container } from 'react-bootstrap';

const ourProdivers = () => {
  return (
    <Container className=" px-4 pt-5" style={{ marginTop: '5%' }}>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://media.discordapp.net/attachments/532293522884395009/1109471294833053838/image.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 cursive cafe">Nuestros Proveedores</h1>
          <p className="lead">Trabajamos con una cuidadosa selección de proveedores para garantizar la calidad de nuestros productos. El Cafetaito nos suministra granos de café de origen local, con sabores ricos y auténticos. Nescafé nos provee de café soluble de alta calidad, perfecto para preparaciones rápidas sin perder el sabor. También colaboramos con Starbucks, aprovechando su experiencia en mezclas y sabores únicos. Anacafé, la Asociación Nacional del Café, nos suministra granos de café guatemalteco de alta calidad, fomentando el apoyo a los productores locales. Por último, Cafiver Nesfacé nos ofrece una variedad de café envasado, garantizando frescura y sabor en cada taza. Confiamos en nuestros proveedores para ofrecer la mejor experiencia cafetera a nuestros clientes.</p>
         
        </div>
      </div>
    </Container>
  );
}

export default ourProdivers
