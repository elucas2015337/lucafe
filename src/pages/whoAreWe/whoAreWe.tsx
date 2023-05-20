import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container } from 'react-bootstrap';



const whoAreWe = () => {

  const redirectToGithub = () => {
    window.location.href = 'https://github.com/elucas2015337';
  };

  return (
    <Container className=" px-4 pt-5" style={{ marginTop: '5%' }}>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://cdn.discordapp.com/attachments/855212089295241236/1100703952124788846/Captura_de_pantalla_2023-04-26_024402.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 cursive cafe">Elder Lucas</h1>
          <p className="lead">Soy un estudiante de ingeniería en sistemas que decidió emprender su propio negocio de cafetería. Mi pasión por el café y el proceso de preparación me llevó a dar este paso. Disfruto formar parte de las mañanas, tardes y noches de las personas al prepararles su taza de café favorita. Cada día, me emociona seleccionar los mejores granos y crear deliciosas bebidas. Es gratificante ser testigo de la satisfacción que experimentan mis clientes al disfrutar de mis creaciones. Cada detalle en mi cafetería refleja mi dedicación y amor por el café. Estoy comprometido en brindar una experiencia única y memorable a todos los que visitan mi establecimiento.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button type="button" variant="primary" size="lg" className="px-4 me-md-2m primary" onClick={redirectToGithub}>
              <FontAwesomeIcon icon={faGithub} className="me-2" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default whoAreWe
