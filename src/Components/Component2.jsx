import '../Styles/Component2.modules.css'
import { ScrollContainer, ScrollPage, Animator, Sticky, Zoom, batch, Fade, MoveOut, StickyIn, FadeIn, ZoomIn, Move, MoveIn, FadeOut } from 'react-scroll-motion';

const Component2 = () => {

    const zoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())

    return (
        <ScrollContainer>
            <ScrollPage>
                {/* <Animator animation={batch(Sticky(35), MoveOut(500, 0))}>
                    <div className='intro-container-left'>
                        <div className='module-border-wrap'>
                            <div className='module'>
                                <h3>Here!</h3>
                            </div>
                        </div>
                    </div>
                </Animator> */}
                <Animator animation={batch(Sticky(65), FadeOut(1,0))}>
                    <h2>Este se encimará YAY!</h2>
                </Animator>

            </ScrollPage>

            <ScrollPage>
                <Animator animation={batch(Sticky(35), FadeIn(), MoveOut(0, -800))}>
                    <h2>Nuevo texto aquí!</h2>
                </Animator>
                <Animator animation={batch(Sticky(65), MoveIn(-580, 0), MoveOut(0, -800))}>
                    <div className='intro-container-left'>
                        <div className='module-border-wrap'>
                            <div className='module'>
                                <Animator animation={FadeOut()}>
                                    <h3>First text</h3>
                                </Animator>
                                <Animator animation={FadeIn()}>
                                    <h3>Here!</h3>
                                </Animator>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    );
  };
  
  export default Component2;