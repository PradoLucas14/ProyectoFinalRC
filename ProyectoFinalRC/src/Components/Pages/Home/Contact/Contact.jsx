import React, { useRef }from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser'
import {useForm} from 'react-hook-form';





const Contact = () => {

const refForm = useRef();     
const handleSubmit = (event) => {
   event.preventDefault();
  
    
    const serviceId = "service_jvd3n3o";
    const templateId = "template_l7x51vm";
    const apikey = "hf-q7WZXSSAmLL_Sj";

    emailjs.sendForm (serviceId, templateId, refForm.current, apikey).then(result => console.log(result.text)).then(result => refForm.current.reset()).catch( error => console.log(error))
}
  return (
    
    <div className='section-form'>
    <div className="overlayAboutAndinos">
    <form ref={refForm} action='' onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2>Contactanos</h2>
        <p>¿Tenes alguna duda? envianos por aquí</p>
      </div>
      <fieldset className='field-name'>
        <label className='symbol-required name' htmlFor="">Nombre</label>
        <input name='username' type="text" placeholder='Ingresa nombre completo' required/>
      </fieldset>
      <fieldset className='field-email'>
        <label className='symbol-required' htmlFor="" name="Email">Correo electronico:</label>
        <input type="email" name="" id="email" placeholder='andinos@gmail.com' required/>
      </fieldset>
      <fieldset className='field-message'>
        <label className='symbol-required' htmlFor="">Consulta</label>
        <textarea  maxLength="500" name="message" id="" placeholder='ingresa tu consulta' cols="30" rows="10" required ></textarea>
      </fieldset>
      <div>
      <button className='btn-send'>Enviar</button>
      
      </div>
    </form>
    </div>
   </div>
  )
}

export default Contact
