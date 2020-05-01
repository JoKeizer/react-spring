import React, {useState} from 'react'
import {useTransition, animated} from 'react-spring';


const ToggleTwoItems = () => {
    const [isToggled, setToggle] = useState(false)

    //isToggled passed in useTransition, null = keys
    const transition = useTransition(isToggled, null,  {
        from: {opacity: 0, position: 'absolute'},
        enter: {opacity: 1},
        leave: {opacity: 0}
    });


    //transition.map with mount and unmount
    return (
        <div style={{position: 'relative'}}>
            {transition.map(
                ({item, key, props}) =>
                    item ? (
                        <animated.h1 style={props}>
                            Hello
                        </animated.h1>
                    ):
                        <animated.h1 style={props}>
                            World
                        </animated.h1>
            )}
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
        </div>
    )
}

// const AnimatedTitle = animated(componentName)

export default ToggleTwoItems
