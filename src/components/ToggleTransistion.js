import React, {useState} from 'react'
import {useTransition, animated} from 'react-spring';


const ToggleTransistion = () => {
    const [isToggled, setToggle] = useState(false)

    //isToggled passed in useTransition, null = keys
    const transition = useTransition(isToggled, null,  {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    });


    //transition.map with mount and unmount
    return (
        <div>
            {transition.map(
                ({item, key, props}) =>
                //item true or false unmount
                item && (
                    <animated.h1 key={key} style={props}>
                        Hello
                    </animated.h1>
                )
            )}
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
        </div>
    )
}

// const AnimatedTitle = animated(componentName)

export default ToggleTransistion
