import '../Styles/Component4.modules.css';
import logo from '../assets/react.svg'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Component4 = () => {

  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, {rotation: 0},{rotation: 180, scrollTrigger: {
      trigger: el
    }})
  },[])

  return (
    <div className='intro-container-left-4'>
      <div className='module-border-wrap-4'>
        <div className='module-4'>
        </div>
    </div>
    {/* <div className='helper'></div> */}
    <img src={logo} alt='logo' className='App-logo' ref={imgRef} />
</div>
  )
}

export default Component4
