import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const contactUs = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Contáctenos</h1>
      <p>Número de telefono: 50426754</p>
      <p>Dirección: 3a. Avenida 9-00 zona 2, 01002 Interior Finca El Zapote, Cdad. de Guatemala 01002</p>
      

      {/* Replace this with your actual iframe code from Google Maps */}
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.7996438569076!2d-90.51540958404375!3d14.658924344017775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a209e1ffbfdd%3A0x12b0303b26e4ecd6!2sUniversidad%20Mariano%20G%C3%A1lvez%20de%20Guatemala!5e0!3m2!1ses-419!2sgt!4v1684591664143!5m2!1ses-419!2sgt" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  );
}

export default contactUs
