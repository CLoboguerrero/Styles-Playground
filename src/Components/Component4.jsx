import '../Styles/Component4.modules.css';
import logo from '../assets/react.svg'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Component4 = () => {

  const imgRef = useRef(null);

  // useEffect(() => {
  //   const el = imgRef.current;
  //   gsap.fromTo(el, {rotation: 0},{rotation: 180, duration: 3, scrollTrigger: {
  //     trigger: el
  //   }})
  // },[])

  return (
    <div className='intro-container-left-4'>
      <div className='module-border-wrap-4'>
        <div className='module-4'>
        </div>
      </div>
    </div>
  )
}

export default Component4
