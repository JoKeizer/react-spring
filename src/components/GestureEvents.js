import React from 'react';

//libary drag
import {useGesture} from 'react-with-gesture';
import {animated, useSpring} from 'react-spring';

const GestureEvents = () => {
    //object xy from animation position coordination
    const [{ x }, set] = useSpring( () => ({ x: 0 }));

    //down and delta from value see console.log click square

    //not freedom to drag everywhere delta is distance
    const bind = useGesture(({down, delta}) => {
        if(down) {
            set({x: delta[0] })

        } else {
            if(delta[0] > 400) {
                set({ x: 500})
            } else if (delta[0] < -400) {
                set({ x: -500 })
            } else {
                set({x: 0})
            }
        }

        // console.log('values',values)
    });

    //{...bind} Gesture
    //map get same value for other side
    return (
        <animated.div
            style={{
                opacity: x.interpolate({
                    map: Math.abs,
                    range: [0, 400],
                    output: [1, 0] }),
                transform: x.interpolate((x) =>
                    `translate3d(${x}px, 0, 0)`
                )
            }}
            {...bind()}
            className="box"
        />

    )
}

export default GestureEvents