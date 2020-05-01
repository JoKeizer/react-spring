import React, {useState} from 'react'
import {useTransition, animated} from 'react-spring';


const ToggleTransistionTwo = () => {
    const [items, setItems] = useState([
        {
            letter: 'C',
            key: 1
        },
        {
            letter: 'O',
            key: 2
        },
        {
            letter: 'C',
            key: 3
        },
        {
            letter: 'O',
            key: 4
        },
    ])

    //isToggled passed in useTransition, null = keys
    const transition = useTransition(items, item => item.key,  {
        from: {opacity: 0,},
        enter: {opacity: 1},
        leave: {opacity: 0}
    });


    //transition.map with mount and unmount
    return (
        <div>
            {transition.map(
                ({item, key, props}) =>
                <animated.h1 style={props} key={key}>
                    {item.letter}
                </animated.h1>

            )}
            <button onClick={() => setItems([
                {
                letter: 'C',
                key: 1
                }
            ])}>Toggle</button>
        </div>
    )
}

// const AnimatedTitle = animated(componentName)

export default ToggleTransistionTwo
