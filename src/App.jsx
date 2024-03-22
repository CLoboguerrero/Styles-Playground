import SmoothScroll from "./Components/SmoothScroll";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Component4 from "./Components/Component4";
import Component5 from "./Components/Component5";
import { ReactLenis } from '@studio-freight/react-lenis';

function App() {

  return (
    <ReactLenis root>
      <Component2/>
      <Component1/>
      <Component4/>
      <Component5/>
      <Component3/>
    </ReactLenis>
  )
}

export default App
