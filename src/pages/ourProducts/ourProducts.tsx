import React from 'react'
import './ourProducts.css'

const ourProducts = () => {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light cursive">Nuestros Productos</h1>
            <p className="lead text-body-secondary">Nuestros productos son una deliciosa selección de café, desde el suave americano hasta el intenso espresso. También ofrecemos capuchinos, lattes y exquisitos postres como brownies y bagels con queso crema. ¡Disfruta de cada sorbo y bocado en nuestra cafetería!</p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
              <img src="https://media.discordapp.net/attachments/855212089295241236/1100703952124788846/Captura_de_pantalla_2023-04-26_024402.png?width=1002&height=671" className="card-img-top" alt="Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary primary">Q10.50</button>
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
