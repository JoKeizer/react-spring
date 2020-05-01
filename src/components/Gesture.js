import React from 'react';

//libary drag
import {useGesture} from 'react-with-gesture';
import {animated, useSpring} from 'react-spring';

const Gesture = () => {
    //object xy from animation position coordination
    const [{ xy }, set] = useSpring( () => ({ xy: [0,0] }));

    //down and delta from value see console.log click square
    const bind = useGesture(({down, delta}) => {
        set({xy: down ? delta : [0,0] })

        // console.log('values',values)
    });

    //{...bind} Gesture
    return (
        <animated.div
            style={{
                transform: xy.interpolate((x, y) =>
                    `translate3d(${x}px, ${y}px, 0)`
                )
            }}
            {...bind()}
            className="box"
        />

    )
}

export default Gesture