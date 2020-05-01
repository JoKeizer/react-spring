import React, {useState} from 'react';
import {useSpring, animated, useTransition} from 'react-spring';

import useMeasure from './useMeasure'


const Accordion = () => {
    const [on, toggle] = useState(false);
    // const [bind, measure] = useMeasure();
    //only take height out measure top give top padding
    const [bind, {height, top}] = useMeasure();
    // console.log("measure", measure)
    //...bind get width, height x y top bind padding or div up no padding

    const animation = useSpring({
        overflow: 'hidden',
        height: on ? height + top * 2 : 0
    });


    return(
        <div>
            <h1>
                <button onClick={ () => toggle(!on) }>Toggle</button>
            </h1>
            <animated.div style={animation}>
                <div {...bind}  className="accordion">
                    <p>Hello, I'm in the accordion</p>
                </div>
            </animated.div>
            <animated.div style={animation}>
                <div {...bind}  className="accordion">
                    <p>Hello, I'm in the accordion</p>
                </div>
            </animated.div>
            <animated.div style={animation}>
                <div {...bind}  className="accordion">
                    <p>Hello, I'm in the accordion</p>
                </div>
            </animated.div>
        </div>
    )

}

export default Accordion;