import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring';


const Toggle = () => {
    const [isToggled, setToggle] = useState(false)

    const {color, y} = useSpring({
        // opacity: isToggled ? 1 : 0,
        color: isToggled ? 'red' : 'green',
        // fontSize: isToggled ? '2rem' : '20em',
        //Up and down
        // transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0, -50px, 0)',
        y: isToggled ? 0 : 1
    })

    return (
        <div>
            <AnimatedTitle style={{
                color,
                // animate range like a bounce keyframes
                transform: y.interpolate({
                    range: [0, 0.25, 0.50, 0.75, 1],
                    output: [0, -25, -50, -100, -50],
                }).interpolate(y => `translate3d(0, ${y}px, 0)`),

            
            }}>Hello</AnimatedTitle>
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
        </div>
    )
}

const AnimatedTitle = animated.h1
// const AnimatedTitle = animated(componentName)

export default Toggle
