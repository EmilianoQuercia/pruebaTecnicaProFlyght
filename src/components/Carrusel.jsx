import React, { useState } from 'react';
import logo1 from '../img/logoProFlight1.png';
import logo2 from '../img/logoProFlight2.png';
import logo3 from '../img/logoProFlight3.png';
import logo4 from '../img/logoProFlight4.png';
import arrowLeft from '../img/arrowLeft.png';
import arrowRight from '../img/arrowRight.png';

const Carrusel = () => {
    const imagenes = [logo1, logo2, logo3, logo4]

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleNextClick = () => {
        if (selectedIndex === imagenes.length - 1) {
          setSelectedIndex(0);
        } else {
          setSelectedIndex(selectedIndex + 1);
        }
      };

      const handlePreviousClick = () => {
        if (selectedIndex === 0) {
          setSelectedIndex(imagenes.length - 1);
        } else {
          setSelectedIndex(selectedIndex - 1);
        }
      };


    return (
        <div className='containerCarrusel'>
            <button onClick={handlePreviousClick} className='divFlecha'>
                <img className='flecha' src={arrowLeft} alt="flecha izquierda" />
            </button>
            {
                imagenes.map((imagen, index)=> (
                        <div key={index} className={selectedIndex === index ? 'divLogoActivo' : 'divLogo'}>
                            <img src={imagen} alt="logo Pro flight" />
                        </div>
                ))         
            }
    
            <button onClick={handleNextClick} className='divFlecha'>
                <img className='flecha' src={arrowRight} alt="flecha izquierda" />
            </button>
        </div>
    );
}

export default Carrusel;
