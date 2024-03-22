import React from 'react';
import gsap from 'gsap';
import logo from '../assets/react.svg'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const Component5 = () => {

    const clickBox = useRef();

    const { contextSafe } = useGSAP({scope: clickBox})

    const clickToEnlarge = contextSafe (() => {
        clickBox.current.addEventListener('click', () => {
            gsap.to('.box', {scale: 1.5});
        });
    });


  return (
    <div className='box'>
      <img src={logo} alt='logo' className='App-logo' ref={clickBox} onClick={clickToEnlarge}/>
    </div>
  )
}

export default Component5
