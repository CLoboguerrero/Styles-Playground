import React from 'react';
import gsap from 'gsap';
import logo from '../assets/react.svg'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const Component5 = () => {

    const clickBox = useRef();
    const atomImg = useRef();

    //contextSafe sirve para generar animaciones 'seguras' en REACT para 'limpiar' (de la memoria) la animación una vez que useGSAP se haya montado y que la animación se haya ejecutado.
    
    const { contextSafe } = useGSAP({scope: clickBox})

    const clickToEnlarge = contextSafe (() => {
        gsap.to('.component5-logo', {scale: 1.5, rotation: 90});
    });


    //Otra manera de poder crear una animación es con eventListener, aunque esto NO es buena práctica de uso en React (Recordar que al estar definitido el tipo de event, no es necesario definir un onClick en el elemento HTML correspondiente)

    // useGSAP((context, contextSafe) => {

    //   const clickToEnlarge2 = contextSafe(() => {
    //     gsap.to(atomImg.current, {scale: 1.5, rotation: 180});
    //   });

    //   atomImg.current.addEventListener('click', clickToEnlarge2);

    //   return () => {
    //     atomImg.current.removeEventListener('click', clickToEnlarge2);
    //   };

    // }, {scope: clickBox});


  return (
    <div className='box' ref={clickBox}>
      <img src={logo} alt='logo' className='component5-logo' onClick={clickToEnlarge} ref={atomImg}/>
    </div>
  )
}

export default Component5
