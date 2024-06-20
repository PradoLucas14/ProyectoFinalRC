import React from 'react'
import { useState,useEffect } from 'react';
import './Upload.css'

const Upload = () => {
    const [buttonUpload, setButtonUpload] = useState('button-transparent');
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setButtonUpload('button-color');
          } else {
            setButtonUpload('button-transparent');
          }
        };    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  return (
    <a className={`boton-subir ${buttonUpload}`} onClick={scrollToTop}>
    </a>
  )
}
export default Upload;