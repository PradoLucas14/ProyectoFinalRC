import React from 'react';
import { Modal } from 'react-bootstrap'; // Ajusta según tus estilos y componentes

const TerminosCondiciones = ({ onClose }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Términos y Condiciones de Reservas - Restaurante Andinos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
<>
<h5>Información de Contacto:</h5>
<p>Para realizar una reserva en el Restaurante Andinos, es obligatorio proporcionar un número de contacto válido. Este número se utilizará para confirmar la reserva en caso de que sea necesario.
</p>

<h5>Confirmación de la Reserva:</h5>
<p>
Nos reservamos el derecho de llamar al número de contacto proporcionado hasta una hora antes de la hora reservada para confirmar la asistencia. Si la reserva es confirmada, se garantizará la mesa para la cantidad de invitados especificada en el formulario de reserva de nuestra página web.
</p>
<h5>
Cancelaciones:
</h5>
<p>
Las cancelaciones pueden realizarse hasta una hora antes de la hora reservada. En caso de no recibir confirmación de la reserva, nuestro equipo se pondrá en contacto con usted hasta media hora antes de la hora de la reserva.
</p>

<h5>
No Respuesta:
</h5>
<p>
Si después de realizar la primera llamada y transcurridos 20 minutos no obtenemos respuesta, nos reservamos el derecho de cancelar la reserva a través de la administración de nuestra página web.
</p>
<h5>
Modificaciones de la Reserva:
</h5>
<p>
Las modificaciones de la reserva pueden realizarse hasta media hora antes de la hora reservada. En caso de no realizar modificaciones y de llegar al restaurante con un número diferente de personas, la disponibilidad de sillas o mesas estará sujeta a la capacidad en ese momento.
</p>
<h5>
Disponibilidad:
</h5>
<p>
Las reservas están sujetas a disponibilidad. Haremos todo lo posible para acomodar sus necesidades, pero en caso de cambios no comunicados a tiempo, la disponibilidad de mesas y sillas dependerá de la situación en el momento de su llegada.
</p>
<h5>
Aceptación de Términos:
</h5>
<p>
Al realizar una reserva en el Restaurante Andinos, usted acepta estos términos y condiciones en su totalidad.
</p>
<span>
    
Gracias por elegir Restaurante Andinos. Esperamos ofrecerle una experiencia gastronómica excepcional.
</span>
</>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose}>Cerrar</button>
      </Modal.Footer>
    </Modal>
  );
};

export default TerminosCondiciones;