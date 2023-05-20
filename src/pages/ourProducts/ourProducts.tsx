import React from 'react'
import './ourProducts.css'

const ourProducts = () => {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light cursive cafe">Nuestros Productos</h1>
            <p className="lead text-body-secondary cafe">Nuestros productos son una deliciosa selección de café, desde el suave americano hasta el intenso espresso. También ofrecemos capuchinos, lattes y exquisitos postres como brownies y bagels con queso crema. ¡Disfruta de cada sorbo y bocado en nuestra cafetería!</p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458589233451019/americano.jpg" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Una taza equilibrada y suave de café negro, perfecta para comenzar el día con energía.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Café Americano: Q10.50</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109460127179874344/capuchino2.jpg?width=1007&height=671" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Una combinación armoniosa de café espresso y espuma de leche, coronada con un toque de cacao en polvo.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Capuchino: Q18.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458590223302666/cafelatte.jpg?width=671&height=671" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Una mezcla cremosa de café espresso y leche vaporizada, decorada con una delicada capa de espuma.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Latte: Q20.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458591880056874/expresso.jpg" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Un concentrado de café intenso y aromático, servido en una pequeña taza para disfrutar de su sabor completo.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Expresso: Q10.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458592307871814/moccha.jpg?width=895&height=671" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Una tentadora fusión de café espresso, chocolate y leche, coronada con crema batida y virutas de chocolate.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Mocha: Q22.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458590953115678/chai.jpg?width=1192&height=671" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Una infusión de té negro con especias como canela, cardamomo y jengibre, endulzada con un toque de miel.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Té chai: Q15.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458589992620072/cafefrappe.jpg" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Una refrescante bebida helada a base de café, mezclada con hielo y aderezada con crema batida.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Frappé de café: Q25.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458589476716634/bagelquesocrema.jpg?width=1150&height=671" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Un delicioso pan redondo y suave, relleno de queso crema y opciones como salmón ahumado o vegetales frescos.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Bagel con queso crema: Q15.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458591527739402/croassant.png" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">Un clásico croissant horneado a la perfección, relleno de jamón y queso derretido, para un desayuno o almuerzo sabroso.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Croissant de jamón y queso: Q18.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/532293522884395009/1109458589757743154/brownie.jpg" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text"> Un tierno y decadente postre de chocolate, con una textura suave y un sabor intenso que deleitará tu paladar.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Brownie de Chocolate: Q12.00</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            {/* Add more cards here */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ourProducts
