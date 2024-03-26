import React from 'react';
import gsap from 'gsap';
import logo from '../assets/react.svg'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Component5 = () => {

    const clickBox = useRef();
    const atomImg = useRef();
    const scrollCuadrito = useRef();

    //contextSafe sirve para generar animaciones 'seguras' en REACT para 'limpiar' (de la memoria) la animación una vez que useGSAP se haya montado y que la animación se haya ejecutado.
    
    const { contextSafe } = useGSAP({scope: clickBox})

    const clickToEnlarge = contextSafe (() => {
        gsap.to('.component5-logo', {scale: 1.5, rotation: 90});
    });

    //USO DE SCROLLTRIGGER:
    useGSAP(() => {
      gsap.to(".cuadrito", {
        scrollTrigger: {
          trigger: ".cuadrito",
          start: 'top center',//La animación comienza cuando la parte superior (top) del elemento, pasa por el centro del viewport. Se pueden usar Px's
          //end: 'bottom 100px', //Se pueden hacer marcadores relativos. Por ejemplo, el valor del marcador de fin, se puede hacer relativo al valor de inicio, por ejemplo +=300
          end: '+=300',
          markers: true, // despliega los marcadores de inicio/fin de la animación.
          //Los start/end triggers, también pueden ser otros elementos del DOM
          toggleActions: 'restart pause reverse pause'
          //Keywords que se pueden usar en toggleActions: play pause resume reverse restart reset complete none
          //Primera pos: hace la animación una vez entra al viewport, ejemplo: restart (la animación reinicia cada vez que se entra en el viewport).
          //Segunda pos: lo que hace después de haber pasado el viewport (hecho scroll hacia más abajo), ejemplo: pause.
          //Tercera pos: Se hace el ejemplo de'resume' y 'reverse' Cuando regresa al viewport de abajo hacia arriba.
          //Cuarta pos: cuando se regresa al viewóprt de abajo hacia arriba, pero se sobrepasa éste, ejemplo usar pause.
        },
        x: 500,
        rotation: 360,
        duration: 3
      });
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
    <>
      <div className='box' ref={clickBox}>
        <img src={logo} alt='logo' className='component5-logo' onClick={clickToEnlarge} ref={atomImg}/>
        <div id='cuadrito' className='cuadrito'>Cuadrito</div>
      </div>

    </>
  )
}

export default Component5
