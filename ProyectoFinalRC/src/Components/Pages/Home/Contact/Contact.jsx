import React, { useRef }from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser'





const Contact = () => {

const refForm = useRef();     
const handleSubmit = (event) => {
    event.preventDefault();
    
    const serviceId = "service_jvd3n3o";
    const templateId = "template_l7x51vm";
    //
    const apikey = "hf-q7WZXSSAmLL_Sj"

    emailjs.sendForm (serviceId, templateId, refForm.current, apikey).then(result => console.log(result.text)).catch( error => console.log(error))
}
  return (
 
    <form>
  
      <button>SEND</button>
    </form>

  )
}

export default Contact
